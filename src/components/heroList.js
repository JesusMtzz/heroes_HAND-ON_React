import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

export function HeroList({
  heroes,
  selectedHero,
  handleListItemClick,
  handleViewDetail,
}) {
  return (
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
                onClick={(event) => handleListItemClick(event, heroe.ID)}
              >
                <ListItemAvatar>
                  <Avatar>{heroe.ID} </Avatar>
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
  );
}
