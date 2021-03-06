import React from 'react'
import {
    AppBar,
    Toolbar,
    IconButton,
    withStyles,
    Typography,
} from '@material-ui/core'
import PropTypes from 'prop-types'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import BackIcon from '@material-ui/icons/ArrowBack'
import { styles } from '@internal/styles'
import {
    withRouter,
} from 'react-router-dom'

class NavBar extends React.Component {
    static propTypes = {
        toggleDrawer: PropTypes.func.isRequired,
        classes: PropTypes.object.isRequired,
        title: PropTypes.string,
        isHome: PropTypes.bool,
        history: PropTypes.object.isRequired,
    }

    static defaultProps = {
        toggleDrawer: () => {},
        classes: {},
        title: 'Home',
        isHome: false,
        history: {},
    }

    toggleDrawer = () => this.props.toggleDrawer()

    render = () => (
        <AppBar
            position={this.props.isHome ? 'absolute' : 'static'}
        >
            <Toolbar>
                {
                    this.props.isHome ? (
                        <IconButton
                            color='inherit'
                            aria-label='Menu'
                            onClick={this.toggleDrawer}
                        >
                            <MenuIcon />
                        </IconButton>
                    ) : (
                        <IconButton
                            color='inherit'
                            aria-label='Menu'
                            onClick={this.props.history.goBack}
                        >
                            <BackIcon />
                        </IconButton>
                    )
                }
                <Typography
                    className={this.props.classes.title}
                    variant='title'
                    color='inherit'
                >
                    {this.props.title}
                </Typography>
                <IconButton
                    color='inherit'
                    aria-label='Search'
                    className={this.props.classes.searchIcon}
                >
                    <SearchIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default withStyles(styles.ui.navbar)(withRouter(NavBar))
