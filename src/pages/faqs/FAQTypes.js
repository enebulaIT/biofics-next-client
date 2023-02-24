import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import classes from './FAQs.module.css';
import appClasses from '../../App.module.css';

const FAQTypes = (props) => {
    const HTML = [];
    Object.keys(props.faqTypeContent).forEach(key => {
        HTML.push(
            <Button
                onClick={() => props.setActiveFaqTypeTab(key)}
                variant={'contained'}
                className={`${appClasses.btn1} ${classes.faqtypebtn} ${props.activeFaqTypeTab !== key ? classes.unselected : ''}`}
                key={key}>
                {props.faqTypeContent[key].name}
            </Button>
        )
    })
    
    return (
        <Box sx = {{marginBottom: '50px'}}>
            <div className={classes.buttonContainer}>
                    {HTML}
            </div>
        </Box>
    )
}
export default FAQTypes;