import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";

export function HeroCard({ heroes, handleViewDetail, randomHero,validateHeroInList }) {
  return (
    <div>
      <Typography
            variant="h5"
            gutterBottom
            component="div"
            sx={{
              padding: "10px",
            }}
          >
            Top heroes
          </Typography>
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
        {heroes.map((heroe, index) =>
          randomHero ? (
            validateHeroInList(index) &&
            <Card sx={{ maxWidth: 345, margin: "10px" }} key={index}>
              <CardActionArea onClick={() => handleViewDetail(heroe.ID)}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {heroe.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ) : (
            <Card sx={{ maxWidth: 345, margin: "10px" }} key={index}>
              <CardActionArea onClick={() => handleViewDetail(heroe.ID)}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {heroe.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          )
        )}
      </Box>
    </div>
  );
}
