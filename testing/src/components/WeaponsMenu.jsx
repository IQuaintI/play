import { Route, Routes, Link } from "react-router-dom";
import { Accordion } from "@mui/material";
import { AccordionSummary } from "@mui/material";
import { AccordionDetails } from "@mui/material";
import { Typography } from "@mui/material";

export function WeaponsMenu() {
  return (
    <div className="accordion">
      <Accordion>
        <AccordionSummary>
          <Typography>Weapons</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={"span"} variant={"body2"}>
            <ul>
              <li>
                <Link to="../board/testing">Testing</Link>
                <Routes>
                  <Route path="../board/testing" element={<testing />} />
                </Routes>
              </li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
