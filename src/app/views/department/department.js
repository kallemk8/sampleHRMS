import { Stack, Grid, Button, Icon,} from "@mui/material";
import { Box, styled } from "@mui/system";
import { Breadcrumb, SimpleCard } from "app/components";
import { useState } from "react";
import SimpleForm from "./../material-kit/forms/SimpleForm";
import StepperForm from "./../material-kit/forms/StepperForm";
import { TextValidator, ValidatorForm, SelectValidator } from "react-material-ui-form-validator";
import { Span } from "app/components/Typography";
import MenuItem from '@mui/material/MenuItem';
const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));
const TextField = styled(TextValidator)(() => ({
    width: "100%",
    marginBottom: "16px",
  }));
  const SelectField = styled(SelectValidator)(() => ({
    width: "100%",
    marginBottom: "16px",
  }));  
const Department = () => {
    const [state, setState] = useState({});
    const handleChange = (event) => {
        event.persist();
        setState({ ...state, [event.target.name]: event.target.value });
    };
    const handleChange2 = (event) => {
    //event.persist();
    setState({ ...state, [event.target.name]: event.target.value });
    };
      const handleDateChange = (date) => setState({ ...state, date });
      const {
        department,
        subdepartment,
        description,
        status
      } = state;

      const handleSubmit = (values) => {
         console.log("submitted", state);
        // console.log(event);
      };
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: "Department", path: "/department" }, { name: "Form" }]} />
      </Box>

      <Stack spacing={3}>
        <SimpleCard title="Department Form">
        <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
        
        <Grid container spacing={6}>
          <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
            <TextField
                type="text"
                name="department"
                id="standard-basic"
                value={department || ""}
                onChange={handleChange}
                errorMessages={["this field is required"]}
                label="Department (Min length 4, Max length 9)"
                validators={["required", "minStringLength: 4", "maxStringLength: 9"]}
                />

                <TextField
                type="text"
                name="subdepartment"
                label="Sub Department"
                onChange={handleChange}
                value={subdepartment || ""}
                validators={["required"]}
                errorMessages={["this field is required"]}
                />
                <TextField
                type="text"
                name="description"
                label="Description"
                onChange={handleChange}
                value={description || ""}
                validators={["required"]}
                errorMessages={["this field is required"]}
                />
                <select
                    class="MuiOutlinedInput-input MuiInputBase-input css-10vjoz-MuiInputBase-input-MuiOutlinedInput-input"
                    id="demo-simple-select"
                    name="status"
                    value={status || ""}
                    label="Status"
                    onChange={handleChange2}
                >
                    <option value="">Select Status</option>
                    <option value='1'>Active</option>
                    <option value='2'>Inactive</option>
                </select>
            </Grid>
        </Grid>
        <Button color="primary" variant="contained" type="submit">
          <Icon>send</Icon>
          <Span sx={{ pl: 1, textTransform: "capitalize" }}>Submit</Span>
        </Button>
      </ValidatorForm>
          {/* <SimpleForm /> */}
        </SimpleCard>

        {/* <SimpleCard title="stepper form">
          <StepperForm />
        </SimpleCard> */}
      </Stack>
    </Container>
  );
};

export default Department;
