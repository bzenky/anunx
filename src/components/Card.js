import { 
  Button,
  Card as CardMUI,
  CardActions,
  CardMedia,
  CardContent, 
  Container, 
  Grid, 
  Typography, 
  } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  cardMedia: {
    paddingTop: '58%',
  },
}))

const Card = ({ image, title, subtitle, actions }) => {
  const classes = useStyles()

  return (
    <CardMUI>
      <CardMedia
        className={classes.cardMedia}
        image={image}
        title={title}
      />
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="h5" component="h2">
          {subtitle}
        </Typography>
      </CardContent>
      {
        actions
        ?? (
          <CardActions>
            {actions}
          </CardActions>
        )
      }
    </CardMUI>
  )
}

export default Card