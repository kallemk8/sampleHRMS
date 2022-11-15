import { Stack, Grid, Button, Icon,} from "@mui/material";
import { Box, styled } from "@mui/system";
import { Breadcrumb, SimpleCard } from "app/components";
import { useEffect, useState } from "react";
import { TextValidator, ValidatorForm, SelectValidator } from "react-material-ui-form-validator";
import { Span } from "app/components/Typography";
import axios from 'axios.js'
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
const Designation = () => {
    const [state, setState] = useState({});
    const [isEdited, setisEdited] = useState(true);
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
        designation,
        description,
        status
      } = state;
      const getcurrentValue = async () =>{
        const response = await axios.get('http://localhost:5000/designation/1');
        //setState(response.data)
      }
      useEffect(()=>{
        getcurrentValue();
      }, [])
      const handleSubmit = async (values) => {

        const response = await axios.put(`http://localhost:5000/designation/${1}`, state)
        if(response.data.result){
            alert("success")
        }
        // if(isEdited){
           
        // }else{
        //     const response = await axios.put(`http://localhost:5000/designation/${1}`, state)

        //     if(response.data.result){
        //         alert("success")
        //     }
        // }
         
        // console.log(event);
      };
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: "Designation", path: "/designation" }, { name: "Form" }]} />
      </Box>

      <Stack spacing={3}>
        <SimpleCard title="Designation Form">
        <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
        
        <Grid container spacing={6}>
          <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                <TextField
                type="text"
                name="designation"
                id="standard-basic"
                value={designation || ""}
                onChange={handleChange}
                errorMessages={["this field is required"]}
                label="Designation (Min length 4, Max length 9)"
                validators={["required", "minStringLength: 4", "maxStringLength: 9"]}
                />

                <TextField
                type="text"
                name="department"
                label="Department"
                onChange={handleChange}
                value={department || ""}
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

export default Designation;
