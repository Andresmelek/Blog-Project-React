import React, { Component } from 'react';
import * as adminActions from '../../../store/actions/adminActions';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';    
import { withFormik } from 'formik';
import { FormikTextField, FormikSelectField } from 'formik-material-fields';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { withRouter } from 'react-router-dom';
import * as Yup from 'yup';


//Styles fot the add post frame
const styles = theme => ({
    container: {
        margin: theme.spacing.unit * 3,
        display: 'flex',
        displayDirecton: 'row'
    },
    formControl: {
        margin: theme.spacing.unit,
    }, 
    leftside: {
        flex: 4,
        height: '300px',
        margin: theme.spacing.unit * 3,
        padding: theme.spacing.unit * 3
    },
    rightside: {
        flex: 1,
        height: '150px',
        margin: theme.spacing.unit * 3,
        padding: theme.spacing.unit * 3,
    },

    button: {
        position: 'relative',
        marginLeft: '50px',
        left: '-50px',

    }

});

//Class that renders the page to the admin add posts
class AddPosts extends Component {

    //Get that last props and last state
    componentDidUpdate(props, state){
        if (this.props.match.params.view === 'add' && this.props.admin.posts.filter(e => props.title === this.props.values.title).lenght > 0) {
            const post = this.props.admin.posts.filter(p => p.title === this.props.values.title)[0];
            this.props.history.push('/admin/post/edit/' + post.dispatch);

        }
    }
    render(){
        const { classes } = this.props;
        return (
            <div>
                <h1>Add posts</h1>
                <form className={classes.container}>
                <Paper className={classes.leftside}>
                    <FormikTextField 
                        name="title"
                        label="Title"
                        margin="normal"
                        fullwidth
                        onChange={e => this.props.setFieldValue('slug', e.target.value.toLowerCase().replace(/ /g, '_'))}
                    />
                    <br/>
                    <FormikTextField 
                        name="slug"
                        label="Slug"
                        margin="normal"
                        fullwidt
                    />
                    <br/>
                    <FormikTextField    
                        name="content"
                        label="Content"
                        margin="normal"
                        fullwidth
                    />
                    </Paper>
                    <br/>
                <Paper className={classes.rightside}>
                    <FormikSelectField 
                        name="status"
                        label="Status"
                        margin="normal"
                        options={[
                            {label:'Unpulished', value: false},
                            {label:'Published', value: true}
                        ]}
                    />
                        <Button className={classes.button} 
                        variant="contained" 
                        color="secondary"
                        onClick={e => {
                            this.props.handleSubmit()
                        }}
                        ><SaveIcon/>Save</Button>
                </Paper>
                </form>
            </div>
            
        )
    }
}

//Selects the data to be stored and return the data with the component needed
const mapStateToProps = state => ({
    auth: state.auth,
    admin: state.admin
})

//Dispatch the data
const mapDispatchToProps = dispatch => ({
    addPost: (post, token) => {
        dispatch(adminActions.addPost(post, token))
    }

})

export default withRouter(connect(
        mapStateToProps,
        mapDispatchToProps
    )(withFormik({
        mapPropsToValues: () => ({
            title: '',
            slug: '',
            createdAt: '',
            status: false,
            content:'',
    }),
    validationSchema: Yup.object().shape({
        title: Yup.string().required('Title is required'),
        slug: Yup.string().required(),
        content: Yup.string().required()

    }),
    handleSubmit: (values, {setSubmitting, props}) => {
        console.log('Saving', props.addPost);
        props.addPost(values, props.auth.token)

    }
})(withStyles(styles)(AddPosts))));