import { styled } from "@mui/material/styles";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: "rotate(0deg)",
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: "rotate(180deg)",
      },
    },
  ],
}));

export default function Photoshop({ item }) {
  const [expanded, setExpanded] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleClick = () => {
    setIsFavorited(!isFavorited);
    if (isFavorited) {
        item.likes = item.likes - 1
    }
    else {
        item.likes = item.likes + 1
    }
    
};

  
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar
            src={item.user.profile_image.large}
            sx={{ bgcolor: red[500] }}
            aria-label="recipe"
          ></Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={item.user.name}
        subheader={item.user.username}
      />

      <Link to={`/photoDetail/${item.id}`}>
      <CardMedia
        component="img"
        height="194"
        image={item.urls.small}
        alt="Paella dish"
      />
      </Link>
      <CardContent>

        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {item.alt_description}
        </Typography>
      </CardContent>

        <Button variant="contained" color="success" sx={{ marginBottom: 2 , marginTop: 2 , marginLeft: 2}}  onClick={() => window.open(item.links.download, '_blank')}>Download</Button>

      <CardActions disableSpacing>
        <IconButton  aria-label="add to favorites" onClick={handleClick}>
          <FavoriteIcon className={`icon ${isFavorited ? 'text-red-500' : 'text-black'}`}/>

        <Typography variant="span" sx={{ marginLeft: 1}} fontSize={18} color="primary">
          {item.likes}
        </Typography>

        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography sx={{ marginBottom: 2 }}>Method:</Typography>
          <Typography sx={{ marginBottom: 2 }}>{item.user.bio}</Typography>
          <Typography sx={{ marginBottom: 2 }}>
            {item.user.instagram_username}
          </Typography>
          <Typography sx={{ marginBottom: 2 }}>
            {item.user.twitter_username}
          </Typography>
          <Typography>{item.user.location}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
