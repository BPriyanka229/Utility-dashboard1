import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import FacilityCard from "./components/FacilityCard/FacilityCard"
import MeterTable from "./components/MeterTable/MeterTable"

import { Container, Typography, CircularProgress, Alert } from "@mui/material"
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"

import { fetchUtilityRequest } from "./redux/actions/utilityActions"
import darkTheme from "./theme"

import "./api/mockUtilityApi"

interface RootState {
  loading: boolean
  data: any
  error: string | null
}

function App() {

  const dispatch = useDispatch()
  const { loading, data, error } = useSelector((state: RootState) => state)

  useEffect(() => {
    dispatch(fetchUtilityRequest())
  }, [dispatch])

  if (loading) {
    return (
      <Container
        maxWidth="lg"
        sx={{
          padding: 4,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh"
        }}
      >
        <CircularProgress />
      </Container>
    )
  }

  if (error) {
    return (
      <Container maxWidth="lg" sx={{ padding: 4 }}>
        <Alert severity="error">{error}</Alert>
      </Container>
    )
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <Container maxWidth="lg" sx={{ padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          Utility Dashboard
        </Typography>

        <FacilityCard />

        <MeterTable />

      </Container>
    </ThemeProvider>
  )
}

export default App