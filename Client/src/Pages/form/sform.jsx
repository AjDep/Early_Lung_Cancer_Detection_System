import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";

const AntSwitch = styled(Switch)(({ theme }) => ({
  // Your switch styling
}));

const style = {
  // Your list style
};

function ConfirmationDialogRaw(props) {
  const [formData, setFormData] = useState({
    "Yellow Fingers": false,
    "Anxiety": false,
    "Peer Pressure": false,
    "Chronic Disease": false,
    "Fatigue": false,
    "Allergy": false,
    "Wheezing": false,
    "Alcohol Consuming": false,
    "Coughing": false,
    "Swallowing Difficulty": false,
    "Chest Pain": false
    // Add other form fields here and set their default values
  });

  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleSwitchChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.checked });
  };

  const handleSubmit = () => {
    // Send formData to backend using fetch or axios
    fetch("http://localhost:5038/api/Customer/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // Handle success response from backend
        setSubmissionStatus("success");
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle error
        setSubmissionStatus("error");
      });
  };

  return (
    <div>
      <List sx={style}>
        {Object.keys(formData).map((key) => (
          <ListItem key={key}>
            <ListItemText primary={key} />
            <Typography className="p-1"> No </Typography>
            <AntSwitch
              checked={formData[key]}
              onChange={handleSwitchChange}
              name={key}
              inputProps={{ "aria-label": "ant design" }}
            />
            <Typography className="p-1">Yes</Typography>
          </ListItem>
        ))}
      </List>
      <button onClick={handleSubmit}>Submit</button>
      {submissionStatus === "success" && (
        <div>Form submitted successfully!</div>
      )}
      {submissionStatus === "error" && (
        <div>Error submitting form. Please try again later.</div>
      )}
    </div>
  );
}

export default ConfirmationDialogRaw;
