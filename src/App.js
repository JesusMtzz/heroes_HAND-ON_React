import logo from "./logo.svg";
import "./App.css";

import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import { CardActionArea } from "@mui/material";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";

import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";

function App() {
  const [selectedHero, setSelectedHero] = React.useState(0);
  
  const [editHero, setEditHero] = React.useState(false);
  const [heroToEdit, setHeroToEdit] = React.useState(0);

  const [heroToEditName, setHeroToEditName] = React.useState();
  const [heroes, setHeroes] = React.useState([
    { id: 0, name: "Chinese Monke" },
    { id: 1, name: "Mr. Worldwide" },
    { id: 2, name: "Batman" },
    { id: 3, name: "El risas" },
  ]);
  const [optionTB, setOptionTB] = React.useState("Dashboard");

  
  React.useEffect(() => {
    //llamar api de aws y llenar heroes
  }, []);


  const handleListItemClick = (event, index) => {
    setSelectedHero(index);
  };
  const handleChange = (event, newOptionTB) => {
    setOptionTB(newOptionTB);
    setEditHero(false);
  };
  const handleViewDetail = (index) => {
    setHeroToEdit(index);
    setHeroToEditName(heroes[index].name);
    setEditHero(true);
  };
  const editHeroToEditName = (event) => {
    setHeroToEditName(event.target.value);
  };
  const saveHero = () => {
    setHeroes([...heroes].map(hero => {
      if(hero.id === heroToEdit) {
        return {
          ...hero,
          name: heroToEditName
        }
      }
      else {
        return hero};
    }))
    setEditHero(false);
  };

  return (
    <div className="App">
      <Typography
        variant="h4"
        gutterBottom
        component="div"
        sx={{
          padding: "10px",
        }}
      >
        Tour of heroes
      </Typography>

      <ToggleButtonGroup
        color="primary"
        value={optionTB}
        exclusive
        onChange={handleChange}
        sx={{
          padding: "10px",
        }}
      >
        <ToggleButton value="Dashboard">Dashboard</ToggleButton>
        <ToggleButton value="Heroes">Heroes</ToggleButton>
      </ToggleButtonGroup>

      {editHero ? (
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
      ) : optionTB === "Dashboard" ? (
        <div>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              p: 1,
              m: 1,
              bgcolor: "background.paper",
              borderRadius: 1,
            }}
          >
            {heroes.map((heroe, index) => (
              <Card sx={{ maxWidth: 345, margin: "10px" }} key={index}>
                <CardActionArea onClick={() => handleViewDetail(heroe.id)}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {heroe.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </Box>
        </div>
      ) : (
        <div>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              p: 1,
              m: 1,
              bgcolor: "background.paper",
              borderRadius: 1,
            }}
          >
            <List
              dense
              sx={{
                width: "100%",
                maxWidth: 360,
                bgcolor: "background.paper",
                margin: "20px",
              }}
            >
              <Typography
                variant="h5"
                gutterBottom
                component="div"
                sx={{
                  padding: "10px",
                }}
              >
                My heroes
              </Typography>
              {heroes.map((heroe, index) => (
                <ListItem key={index}>
                  <ListItemButton
                    selected={selectedHero != null && selectedHero === index}
                    onClick={(event) => handleListItemClick(event, heroe.id)}
                  >
                    <ListItemAvatar>
                      <Avatar>{index + 1} </Avatar>
                    </ListItemAvatar>
                    <ListItemText>{heroe.name}</ListItemText>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Box>
              <Card sx={{ minWidth: 275, margin: "40px" }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    My hero selected is
                  </Typography>
                  <Typography variant="h5" component="div">
                    {heroes[selectedHero].name}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    onClick={() => handleViewDetail(selectedHero)}
                  >
                    View Details
                  </Button>
                </CardActions>
              </Card>
            </Box>
          </Box>
        </div>
      )}
    </div>
  );
}

export default App;
