import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles({
    menu: {
        color: "pink",
        position: "absolute",
        top: "0px",
        left: "0px",
        "@media (max-width: 800px)": {
        
        },
    },
    iconStyle: {
        fontSize: "large",
        "@media (max-width: 800px)": {
            //fontSize: "small"
        },
    }
})

export const AppMenu = () : JSX.Element => {
    const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.menu}>
      <IconButton
        id="basic-button"
        // aria-controls="basic-menu"
        // aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
          <MenuIcon component={MenuIcon} className={classes.iconStyle} fontSize="large"/>
          {/* <DeleteIcon></DeleteIcon> */}
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Home</MenuItem>
        <MenuItem onClick={handleClose}>Portrait Gallery</MenuItem>
        <MenuItem onClick={handleClose}>Print Shop (coming soon!)</MenuItem>
        <MenuItem onClick={handleClose}>About Me</MenuItem>
      </Menu>
    </div>
  );
}
