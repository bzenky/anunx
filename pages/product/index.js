import {
  Avatar,
  Box,
  Card,
  CardHeader,
  CardMedia,
  Chip,
  Container,
  Grid,
  Typography
} from '@material-ui/core'

import Carousel from 'react-material-ui-carousel'
import TemplateDefault from '../../src/templates/Default'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  box: {
    backgroundColor: theme.palette.background.white,
    padding: theme.spacing(3),
    margin: theme.spacing(3),
  },
  productName: {
    margin: '15px 0',
  },
  price: {
    fontWeight: 'bold',
    marginBottom: 15,
  },
  card: {
    height: '100%',
  },
  cardMedia: {
    paddingTop: '56%',
  }
}))

const Product = () => {
  const classes = useStyles()

  return (
    <TemplateDefault>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Box className={classes.box}>
              <Carousel
                autoPlay={false}
                animation="slide"
                navButtonsAlwaysVisible={true}
                navButtonsProps={{
                  style: {
                    color: 'white'
                  }
                }}
              >
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random?a=1"
                    title="Título da imagem"
                  />
                </Card>
                <Card>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random?a=2"
                    title="Título da imagem"
                  />
                </Card>
              </Carousel>
            </Box>

            <Box className={classes.box} textAlign="left">
              <Typography component="span" variant="caption">
                Publicado
              </Typography>

              <Typography component="h4" variant="h4" className={classes.productName}>
                GTX 1060 TI
              </Typography>

              <Typography component="h4" variant="h4" className={classes.price}>
                R$ 5.000,00
              </Typography>
              <Chip label="Categoria" />
            </Box>

            <Box className={classes.box} textAlign="left">
              <Typography component="h6" variant="h6">
                Descrição
              </Typography>
              <Typography component="p" variant="body2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos exercitationem amet excepturi corporis accusantium, sed ut quasi iusto eligendi quaerat magnam, quos itaque, facilis quae enim! Rerum, obcaecati. Laboriosam, corporis?
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={4}>
            <Card elevation={0} className={classes.box}>
              <CardHeader
                avatar={
                  <Avatar>Z</Avatar>
                }
                title="Zenky"
                subheader="bzenky@gmail.com"
              />
              <CardMedia
                image="https://source.unsplash.com/random"
                title="Bruno Zenky"
              />
            </Card>

            <Box className={classes.box}>
              <Typography component="h6" variant="h6">
                Localização
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </TemplateDefault >
  )
}

export default Product