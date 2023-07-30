import { Accordion } from "@mui/material";
import { AccordionSummary } from "@mui/material";
import { AccordionDetails } from "@mui/material";
import { Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
// NavLink to = '/' style = {({isActive}) => {return isActive ? {color: 'red'} : {}}} >
//           {({isActive}) => {return isActive ? 'Active Home' : 'Not Home'}}

//           </NavLink></li>

function AccordionMenu() {
  return (
    <div className="accordion">
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Weapons</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={"span"} variant={"body2"}>
            <LayoutTest />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Medical</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={"span"} variant={"body2"}>
            <ul>
              <li>First Aid</li>
              <li>Combat Medicine</li>
              <li>Medical Evacuation</li>
              <li>Medical Equipment</li>
              <li>Medical Facilities</li>
              <li>Medical Personnel</li>
              <li>Medical Training</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Legal</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={"span"} variant={"body2"}>
            <ul>
              <li>Rules of Engagement</li>
              <li>Rules of War</li>
              <li>Rules of Engagement</li>
              <li>Rules of War</li>
              <li>Rules of Engagement</li>
              <li>Rules of War</li>
              <li>Rules of Engagement</li>
              <li>Rules of War</li>
              <li>Rules of Engagement</li>
              <li>Rules of War</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default AccordionMenu;
