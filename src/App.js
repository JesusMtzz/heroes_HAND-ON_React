import "./App.css";

import * as React from "react";
import Typography from "@mui/material/Typography";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import axios, { Axios } from "axios";
import { EditHero } from "./components/editHero";
import { HeroCard } from "./components/heroCard";
import { HeroList } from "./components/heroList";

function App() {
  const [selectedHero, setSelectedHero] = React.useState(0);

  const [editHero, setEditHero] = React.useState(false);
  const [heroToEdit, setHeroToEdit] = React.useState(0);

  const [heroToEditName, setHeroToEditName] = React.useState();
  const [heroes, setHeroes] = React.useState([]);
  const [optionTB, setOptionTB] = React.useState("Dashboard");

  const [heroesSize, setHeroesSize] = React.useState(0);
  const [randomHero, setRandomHero] = React.useState(false);
  const [heroRandomList, setHeroRandomList] = React.useState()

  React.useEffect(() => {
    getHeroes();
  }, []);

  React.useEffect(() => {
    if (heroesSize > 3) {
      let rand2 = 0;
      let rand3 = 0;
      let rand4 = 0;
      let rand1 = Math.floor(Math.random() * heroesSize);
      do {
        rand2 = Math.floor(Math.random() * heroesSize);
      } while (rand2 === rand1);
      do {
        rand3 = Math.floor(Math.random() * heroesSize);
      } while (rand3 === rand2 || rand3 === rand1);
      do {
        rand4 = Math.floor(Math.random() * heroesSize);
      } while (rand4 === rand3 || rand4 === rand2 || rand4 === rand1);

      setHeroRandomList([rand1,rand2,rand3,rand4])
      setRandomHero(true);
    } else {
    }
  }, [heroesSize]);

  const validateHeroInList = (idABuscar) => {
    const finder = heroRandomList.find(element => element === idABuscar)
    return finder !== undefined? true:false;
  }

  const getHeroes = () => {
    axios
      .get("https://okegyn4lvl.execute-api.us-east-1.amazonaws.com/v1_0/heroes")
      .then((response) => {
        if (response.status === 200 && response.data.Items !== null) {
          let heroresponse = response.data.Items;
          setHeroesSize(response.data.ScannedCount)
          heroresponse.sort(function (a, b) {
            if (a.ID > b.ID) {
              return 1;
            }
            if (a.ID < b.ID) {
              return -1;
            }
            return 0;
          });
          setHeroes(heroresponse);
        }
      });
  };

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
    axios
      .put(
        "https://okegyn4lvl.execute-api.us-east-1.amazonaws.com/v1_0/heroes/" +
          heroToEdit,
        {
          name: heroToEditName,
        }
      )
      .then((response) => {
        if (response.status === 200) {
          setHeroes(
            [...heroes].map((hero) => {
              if (hero.ID === heroToEdit) {
                return {
                  ...hero,
                  name: heroToEditName,
                };
              } else {
                return hero;
              }
            })
          );

          setEditHero(false);
        }
      });
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
        <EditHero
          heroToEditName={heroToEditName}
          heroToEdit={heroToEdit}
          editHeroToEditName={editHeroToEditName}
          saveHero={saveHero}
        ></EditHero>
      ) : optionTB === "Dashboard" ? (
        <HeroCard
        randomHero= {randomHero}
        validateHeroInList ={validateHeroInList}
          heroes={heroes}
          handleViewDetail={handleViewDetail}
        ></HeroCard>
      ) : (
        <HeroList
          heroes={heroes}
          selectedHero={selectedHero}
          handleListItemClick={handleListItemClick}
          handleViewDetail={handleViewDetail}
        ></HeroList>
      )}
    </div>
  );
}

export default App;
