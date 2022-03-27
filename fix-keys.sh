#!/bin/bash
# Author: Alven
# Maintainer: Megavolt

# --- CONFIG ---

readonly KEY_FINGERPRINT__MANJARO="39F0EC1AE50B37E5F3196F09DAD3B211663CA268";
# readonly KEY_NAME__MANJARO="Bernhard Landauer";
# readonly KEY_EMAIL__MANJARO="oberon@manjaro.org";

readonly KEY_FINGERPRINT__ARCHLINUX="02FD1C7A934E614545849F19A6234074498E9CEE";
# readonly KEY_NAME__ARCHLINUX="Christian Hesse";
# readonly KEY_EMAIL__ARCHLINUX="arch@eworm.de";

readonly TEMP_PATH_FOR_PACKAGES="$HOME/.cache/pkg/";
readonly gpg_dir=$(pacman -v -Qq pacman | grep -i "GPG Dir" | cut -d ":" -f 2 | xargs);

# --- APP ---

initial_warning() {
  echo -n "You are about to renew the local keyring database of pacman. Want to proceed? [Y/n]: ";
  read;

  if [[ ${REPLY} == "" || ${REPLY} == "Y" || ${REPLY} == "y" || ${REPLY} == "yes" ]]; then
    echo "The app started.";
  else
    echo "Aborted by user. Nothing was changed.";
    exit 0;
  fi;
}

recreate_local_keyring() {
  echo -n "Recreating local keyring... ";
  sudo rm -rf "${gpg_dir}" > /dev/null 2> /dev/null;
  sudo pacman-key --init > /dev/null 2> /dev/null;
  echo "Done";
}

obtain_current_keys_of_maintainers() {
  echo -n "Obtaining current keys of package maintainers... ";
  sudo pacman -Sw manjaro-keyring archlinux-keyring --noconfirm > /dev/null 2> /dev/null;
  echo "Done";
}

install_keyring_packages_in_alt_way() {
  echo -n "Installing keyring packages in alternative way... ";
  sudo pacman -U "${TEMP_PATH_FOR_PACKAGES}manjaro-keyring-*.tar.zst "${TEMP_PATH_FOR_PACKAGES}archlinux-keyring-*.tar.zst --noconfirm > /dev/null 2> /dev/null;
  sudo rm -Rf $HOME/.cache/pkg/ > /dev/null;
  echo "Done";
}

prepare_url_list() {
  local readonly URL_BASE=$(pacman-mirrors --status | grep "\:\/\/" | head -n 1 | awk '{print $NF}');
  local readonly ARCH=$(uname -m);
  local readonly BRANCH=$(pacman-mirrors -G);
  local url_list="";

  for distro in "manjaro" "archlinux"; do
    local readonly VERSION=$(pacman -Si "${distro}-keyring" | grep "Version" | cut -d ":" -f 2 | xargs);
    local readonly URL="${URL_BASE}${BRANCH}/core/${ARCH}/${distro}-keyring-${VERSION}-any.pkg.tar.zst";
    url_list="${url_list} ${URL}";
  done;

  echo $url_list;
}

obtain_keyring_packages() {
  echo -n "Obtaining keyring packages... ";

  mkdir -pv "${TEMP_PATH_FOR_PACKAGES}" > /dev/null;
  local readonly URL_LIST=$( prepare_url_list );
  wget -q -P "${TEMP_PATH_FOR_PACKAGES}" $(echo "${URL_LIST}" | awk '{print $1 " " $2}') 2> /dev/null;
  local readonly EXIT_STATUS="${?}";

  if [[ "${EXIT_STATUS}" != 0 ]]; then
    echo;
    echo "Error while network request to get packages. Exit status code: ${EXIT_STATUS}. Please post full app output on the https://forum.manjaro.org/c/support/applications/106 Thank you for supporting the app!";
    echo "Exiting.";
    exit 2;
  else
    echo "Done";
  fi;
}

show_on_entrance_to_alt_way() {
  echo;
  echo "Switching into alternative way of keys gathering:";
}

switch_to_alternative_way_of_keys_gathering() {
  show_on_entrance_to_alt_way;
  recreate_local_keyring;
  obtain_keyring_packages;
  install_keyring_packages_in_alt_way;
}

locally_sign_keys() {
  echo -n "Locally signing keys... ";
  sudo pacman-key --lsign-key "${KEY_FINGERPRINT__MANJARO}" "${KEY_FINGERPRINT__ARCHLINUX}" > /dev/null 2> /dev/null;
  local readonly LSIGN_EXIT_CODE="${?}";

  if [[ "${LSIGN_EXIT_CODE}" != "0" ]]; then
    echo;
    echo;
    echo "Error internal condition reached: lsign exit status: ${LSIGN_EXIT_CODE}. It is highly likely that the stubbed key fingerprint values in this app are obsolete. Please post full app output on the https://forum.manjaro.org/c/support/applications/106 Thank you for supporting the app!";
    return 1;
  else
    echo "Done";
    return 0;
  fi;
}

install_keyring_packages() {
  echo -n "Installing keyring packages... ";
  sudo pacman -S manjaro-keyring archlinux-keyring --noconfirm > /dev/null 2> /dev/null;
  echo "Done";
}

renew_mirror_servers() {
  echo -n "Renewing mirror servers... ";
  sudo pacman-mirrors -a -f 5 > /dev/null 2> /dev/null;
  sudo pacman -Syy > /dev/null 2> /dev/null;
  echo "Done";
}

renew_keyring_packages() {
  recreate_local_keyring;
  renew_mirror_servers;
  obtain_current_keys_of_maintainers;

  locally_sign_keys;
  local LSIGN_STATUS="${?}";
  
  if [[ $LSIGN_STATUS == "0" ]]; then
    install_keyring_packages;
  else
    switch_to_alternative_way_of_keys_gathering;
  fi;
}

populate_keys_into_local_keyring() {
  echo -n "Populating keys into local keyring... ";
  sudo pacman-key --populate manjaro archlinux > /dev/null 2> /dev/null;
  echo "Done";
}

create_local_keyring_from_scratch() {
  recreate_local_keyring;
  populate_keys_into_local_keyring;
}

do_after_main_job_finished() {
  echo "Finished.";
}

main() {
  initial_warning;
  renew_keyring_packages;
  create_local_keyring_from_scratch;
  do_after_main_job_finished;
}

main;

exit 0;
