import React, {Component} from 'react';
import CryptoNewsApi from 'crypto-news-api'

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Skeleton from '@material-ui/lab/Skeleton';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import classes from './Notifications.css'






class Notifications extends Component {

    state = {
        topNews:[],
        loading:true
    }

    componentDidMount(){
        const Api = new CryptoNewsApi('0e50ede992998a0f19d7715eedce78bc');
        Api.getTopNews()
        .then((article) => {
            this.setState({loading:false})
            console.log(article)
            this.setState({topNews:article})
        })

    }
    
    render(){
        // console.log(this.state.topNews)
        let content = this.state.loading ? (
            <Skeleton animation="wave"  width="100%" height="100%" />
          ) :  (this.state.topNews.map((news) => {
            return(
                <Card style={styles.root}>
      <CardHeader
        avatar={
            <Avatar alt="Remy Sharp" src={news.source.favicon} />
        }
        title={news.title}
        subheader={news.publishedAt}
      />
      <CardMedia
        style={styles.image}
        component="img"
        alt="newsImage"
        height="70px"
        className={classes.media}
        image={news.originalImageUrl}
        title="Paella dish"
      ></CardMedia>
      <CardActions style= {{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
        <Button size="small"><a href = {news.url} target="_blank" rel="noopener noreferrer" style={{textDecoratin:'none'}} >read</a></Button>
        <p>Description: <span><em>{news.description.slice(0, 35) + '...'}</em></span> </p>
        <p>Source: <span>{news.source.name}</span> </p>
      </CardActions>
      </Card>
            )
        }))
        return(
            content
        )
    }
}

const styles = {
    root:{
        margin:10
    },
    media : {
        paddingTop:20
    },
    image:{
        height:200
    }
}

export default Notifications;