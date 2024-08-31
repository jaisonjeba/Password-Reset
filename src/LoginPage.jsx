import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { API } from "../global";

const formValidationSchema = yup.object({
  email: yup.string().email().required("Email address is required"),
  password: yup.string().required("password required").min(8),
});

export const LoginPage = () => {
  const navigate = useNavigate();
  const { handleSubmit, handleChange, handleBlur, values, touched, errors } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: formValidationSchema,
      onSubmit: async (values) => {
        const data = await fetch(`${API}/login`, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(values),
        });

        if (data.status === 401) {
          alert("invalid Credantials");
        } else {
          const result = await data.json();
          localStorage.setItem("token", result.token);
          navigate("/mobiles");
        }
      },
    });
  return (
    <form onSubmit={handleSubmit}>
      <Card className="login-container">
        <h4>Welcome !!</h4>
        <CardContent className="card-content">
          <TextField
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            label="Email"
            variant="outlined"
            error={touched.email && errors.email}
            helperText={touched.email && errors.email ? errors.email : null}
          />
          <TextField
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            label="password"
            type="password"
            variant="outlined"
            error={touched.password && errors.password}
            helperText={
              touched.password && errors.password ? errors.password : null
            }
          />
          <Button type="submit" variant="contained">
            Login
          </Button>
          <small
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/login/forgetpassword")}
          >
            forget password?
            <hr style={{ opacity: 0.5, width: "70%" }} />
          </small>

          <Button
            style={{ width: "50%", margin: "0px auto" }}
            onClick={() => navigate("/signup")}
            variant="contained"
            color="success"
          >
            Create Account
          </Button>
        </CardContent>
      </Card>
    </form>
  );
};
