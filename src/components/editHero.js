import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export function EditHero({
  heroToEditName,
  heroToEdit,
  editHeroToEditName,
  saveHero,
}) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        p: 1,
        m: 1,
        bgcolor: "background.paper",
        borderRadius: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          p: 1,
          m: 1,
          bgcolor: "background.paper",
          borderRadius: 1,
        }}
      >
        <Box
          sx={{
            m: 1,
          }}
        >
          <Typography>Editar Hero</Typography>
        </Box>
        <Box
          sx={{
            m: 1,
          }}
        >
          <Typography> {heroToEditName}</Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          p: 1,
          m: 1,
          bgcolor: "background.paper",
          borderRadius: 1,
        }}
      >
        <TextField
          id="standard-basic"
          label="Id"
          value={heroToEdit}
          variant="standard"
          disabled
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          p: 1,
          m: 1,
          bgcolor: "background.paper",
          borderRadius: 1,
        }}
      >
        <TextField
          id="standard-basic"
          label="Name"
          value={heroToEditName}
          onChange={editHeroToEditName}
          variant="standard"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          p: 1,
          m: 1,
          bgcolor: "background.paper",
          borderRadius: 1,
        }}
      >
        <Button size="small" onClick={saveHero}>
          Back
        </Button>
      </Box>
    </Box>
  );
}
