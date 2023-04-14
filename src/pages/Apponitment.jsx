import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const Appointment= () => {
  const [reasonForVisit, setReasonForVisit] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const availableTimes = ["9:00am", "11:00am", "2:00pm", "4:00pm"];

  const handleReasonForVisit = (event) => {
    setReasonForVisit(event.target.value);
  };

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePhone = (event) => {
    setPhone(event.target.value);
  };

  const handleDateSelect = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleTimeSelect = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Appointment booked for ${selectedDate} at ${selectedTime}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <TextField
            label="Reason for visit"
            variant="outlined"
            value={reasonForVisit}
            onChange={handleReasonForVisit}
          />
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <TextField
            label="Name"
            variant="outlined"
            value={name}
            onChange={handleName}
          />
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <TextField
            label="Email address"
            variant="outlined"
            value={email}
            onChange={handleEmail}
          />
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <TextField
            label="Phone number"
            variant="outlined"
            value={phone}
            onChange={handlePhone}
          />
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <TextField
            label="Select a date"
            variant="outlined"
            type="date"
            onChange={handleDateSelect}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </FormControl>
        {selectedDate && (
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="time-select-label">Select a time</InputLabel>
            <Select
              labelId="time-select-label"
              value={selectedTime}
              onChange={handleTimeSelect}
              variant="outlined"
            >
              {availableTimes.map((time) => (
                <MenuItem key={time} value={time}>
                  {time}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
        <Button
          variant="contained"
          type="submit"
          disabled={!selectedTime}
          sx={{ m: 1, minWidth: 120 }}
        >
          Book appointment
        </Button>
      </form>
    </div>
  );
};

export default Appointment
