import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,.35)"
        : "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
}));

const style = {
  py: 0,
  width: "100%",
  maxWidth: 360,
  borderRadius: 2,
  border: "1px solid",
  borderColor: "divider",
  backgroundColor: "background.paper",
};

function ConfirmationDialogRaw(props) {
  return (
    <div>
      <List sx={style}>
        <ListItem>
          <ListItemText primary="Yellow Fingers" />
          <Typography className="p-1"> No </Typography>
          <AntSwitch
            defaultChecked
            inputProps={{ "aria-label": "ant design" }}
          />
          <Typography className="p-1">Yes</Typography>
        </ListItem>

        <ListItem>
          <ListItemText primary="Anxiety" />
          <Typography className="p-1"> No </Typography>
          <AntSwitch
            defaultChecked
            inputProps={{ "aria-label": "ant design" }}
          />
          <Typography className="p-1">Yes</Typography>
        </ListItem>

        <ListItem>
          <ListItemText primary="Peer Pressure" />
          <Typography className="p-1"> No </Typography>
          <AntSwitch
            defaultChecked
            inputProps={{ "aria-label": "ant design" }}
          />
          <Typography className="p-1">Yes</Typography>
        </ListItem>

        <ListItem>
          <ListItemText primary="Chronicdisease" />
          <Typography className="p-1"> No </Typography>
          <AntSwitch
            defaultChecked
            inputProps={{ "aria-label": "ant design" }}
          />
          <Typography className="p-1">Yes</Typography>
        </ListItem>

        <ListItem>
          <ListItemText primary="Fatigue" />
          <Typography className="p-1"> No </Typography>
          <AntSwitch
            defaultChecked
            inputProps={{ "aria-label": "ant design" }}
          />
          <Typography className="p-1">Yes</Typography>
        </ListItem>

        <ListItem>
          <ListItemText primary="Allergy" />
          <Typography className="p-1"> No </Typography>
          <AntSwitch
            defaultChecked
            inputProps={{ "aria-label": "ant design" }}
          />
          <Typography className="p-1">Yes</Typography>
        </ListItem>

        <ListItem>
          <ListItemText primary="Wheezing" />
          <Typography className="p-1"> No </Typography>
          <AntSwitch
            defaultChecked
            inputProps={{ "aria-label": "ant design" }}
          />
          <Typography className="p-1">Yes</Typography>
        </ListItem>

        <ListItem>
          <ListItemText primary="Alcoholconsuming" />
          <Typography className="p-1"> No </Typography>
          <AntSwitch
            defaultChecked
            inputProps={{ "aria-label": "ant design" }}
          />
          <Typography className="p-1">Yes</Typography>
        </ListItem>

        <ListItem>
          <ListItemText primary="Coughing" />
          <Typography className="p-1"> No </Typography>
          <AntSwitch
            defaultChecked
            inputProps={{ "aria-label": "ant design" }}
          />
          <Typography className="p-1">Yes</Typography>
        </ListItem>

        <ListItem>
          <ListItemText primary="Swallowingdifficulty" />
          <Typography className="p-1"> No </Typography>
          <AntSwitch
            defaultChecked
            inputProps={{ "aria-label": "ant design" }}
          />
          <Typography className="p-1">Yes</Typography>
        </ListItem>

        <ListItem>
          <ListItemText primary="Chestpain" />
          <Typography className="p-1"> No </Typography>
          <AntSwitch
            defaultChecked
            inputProps={{ "aria-label": "ant design" }}
          />
          <Typography className="p-1">Yes</Typography>
        </ListItem>
      </List>
    </div>
  );
}

export default ConfirmationDialogRaw;
