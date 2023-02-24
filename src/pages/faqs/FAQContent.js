import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import classes from './FAQs.module.css';


const FAQContent = (props) => {
    const HTML = [];
    Object.keys(props.faqContent).forEach((key, index) => {
        if(Number(props.activeFaqTypeTab) === Number(props.faqContent[key].faq_type)) {
            HTML.push(
                <Accordion defaultExpanded = {index === 0}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <span className={classes.faqtitle}>{props.faqContent[key].question}</span>
                    </AccordionSummary>
                    <AccordionDetails>
                        <span className={classes.faqcontent}>
                            {props.faqContent[key].answer}
                        </span>
                    </AccordionDetails>
                </Accordion>
            )
        }
    })

    return HTML
}

export default FAQContent;