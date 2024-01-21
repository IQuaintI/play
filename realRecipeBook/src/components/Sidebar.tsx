type SidebarProps = {
  title: string;
  items: Array<{ id: number; label: string }>;
  onSelect: (item: { id: number; label: string }) => void;
};

const Sidebar: React.FC<SidebarProps> = ({ title, items, onSelect }) => {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id} onClick={() => onSelect(item)}>
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
