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
import ImageIcon from '@material-ui/icons/Image';
import API from '../../../utils/api';
import * as Yup from 'yup';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

/* global $ */

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
        height: '100%',
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

    }, 
    save: {
        marginBottom: theme.spacing.unit * 3,
    },
    postImage: {
        width: '100%'
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
        //When redux state changes post in admin reducer
        if (this.props.admin.post.id !== props.admin.post.id) {
            this.props.setValues(this.props.admin.post)
        }

        }

    uploadImage = (e) => {
        const data = new FormData();
        data.append('file', e.target.files[0], new Date().getTime().toString() +  e.target.files[0].name);
        this.props.uploadImage(data, this.props.auth.token, this.props.admin.post.id, this.props.auth.user.userId)
    }
        
    //To intert data into
    componentDidMount(props, state) {
        if (this.props.match.params.view === 'edit' && this.props.match.params.id){
            this.props.getSinglePost(this.props.match.params.id, this.props.auth.token)
        }
    }

    modules = {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            [{header:1}, {header: 2}],
            [{list: 'ordered'}, {list: 'bullet'}],
            [{indent: '-1'}, {indent: '+1'}],
            [{size: ['small', 'medium', 'large','huge']}],
            [{color: []}, {background:[]}],
            ['image'],
            ['clean']
        ]
    }

    formats = [
        'header', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'script',
        'list', 'bullet', 'indent', 'link', 'image', 'color', 'code-block'
    ]

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
                    <ReactQuill
                        value={this.props.values.content}
                        placeholder="Write what insperes you"
                        onChange={val => this.props.setFieldValue('content', val) }
                        modules={this.modules}
                        formats={this.formats}
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
                    <div className={classes.save}>
                        <Button className={classes.button} 
                        variant="contained" 
                        color="secondary"
                        onClick={e => {
                            this.props.handleSubmit()
                        }}
                        ><SaveIcon/>Save</Button>
                    </div>
                        {this.props.admin.post.postImage?
                            this.props.admin.post.postImage.length > 0?
                            <img alt="Upload" src={API.makeFileURL(this.props.admin.post.postImage[0].url, this.props.auth.token)} className={classes.postImage} />
                        : null
                        : null
                        }
                   
                </Paper>
                </form>
            </div>
            
        )
    }
}

//Selects the data to be stored and returns the data with the component needed
const mapStateToProps = state => ({
    auth: state.auth,
    admin: state.admin
})

//Dispatch the data
const mapDispatchToProps = dispatch => ({
    addPost: (post, token) => {
        dispatch(adminActions.addPost(post, token));
    },
    updatePost: (post, token) => {
        dispatch(adminActions.updatePost(post, token));
    },
    getSinglePost: (id, token) => {
        dispatch(adminActions.getSinglePost(id, token));
    },
    uploadImage: (data, token, postId, userId) => {
        dispatch(adminActions.uploadImage(data, token, postId, userId));
    }
})

export default withRouter(connect(
        mapStateToProps,
        mapDispatchToProps
    )(withFormik({
        mapPropsToValues: (props) => ({            
            title: props.admin.post.title || '',
            slug: props.admin.post.slug || '',
            createdAt: props.admin.post.createdAt || '',
            status: props.admin.post.status || false,
            content: props.admin.post.content  || '',
    }),
    validationSchema: Yup.object().shape({
        title: Yup.string().required('Title is required'),
        slug: Yup.string().required(),
        content: Yup.string().required()

    }),
    handleSubmit: (values, {setSubmitting, props}) => {
        console.log('Saving', props.addPost);
        if(props.match.params.view === 'edit'){
            const post = {
                ...values,
                id: props.match.params.id   
            }
            props.updatePost(post, props.auth.token);
        } else {
            props.addPost(values, props.auth.token);
        }
    }
})(withStyles(styles)(AddPosts))));