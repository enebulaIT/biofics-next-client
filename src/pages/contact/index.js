import classes from './Contact.module.css';
import { useState, useRef } from 'react';
import PageLoader from '../../Components/PageLoader/PageLoader';
import { Button, TextField, Box, Grid } from '@mui/material';
import {
  FacebookIconBrown,
  InstagramIconBrown,
  LinkedinIconBrown,
  MapPinIconBrown,
  TwitterIconBrown,
  PhoneIconBrown,
  MailIconBrown,
} from '../../assets/icons';
import useWindowDimensions from '../../utils/windowDimention';
import Hero2 from '../../Components/Hero/Hero2';

const defaultInnerBannerImg = '/images/defaultInnerBanner.jpg';


const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [comments, setComments] = useState('');
  const [careerEmail, setCareerEmail] = useState('');
  const [careerFirstName, setCareerFirstName] = useState('');
  const [careerLastName, setCareerLastName] = useState('');
  const [careerSelectPosition, setCareerSelectPosition] = useState('');
  const [file, setFile] = useState('');
  const inputFile = useRef(null);
  const { width } = useWindowDimensions();

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    setFile(file);
  };

  const onBrowserFileClick = () => {
    inputFile.current.click();
  };

  return (
    <>
      <Hero2 bannerData={{
        Title: "Contact Us",
        image: defaultInnerBannerImg
      }} />
      <div className={classes.container}>
        {loading && <PageLoader />}
        <div className={classes.contactPage}>
        </div>
        <div className={classes.contactUsForm}>
          <div className={classes.getInTouch}>
            <h6 className={classes.title}>{'Get in touch'}</h6>
            <div className={classes.subTitle}>Lorem Ipsum, Lorem Ipsum</div>

            <div className={classes.commonInfo}>
              <PhoneIconBrown />

              <div className={classes.info}>
                <div className={classes.subTitle}>+91 98658-69706</div>
                <div className={classes.subTitle}>+91 98658-69706</div>
              </div>
            </div>

            <div className={classes.commonInfo}>
              <MailIconBrown />

              <div className={classes.info}>
                <div className={classes.subTitle}>info@biofics.com</div>
                <div className={classes.subTitle}>info@biofics.com</div>
              </div>
            </div>

            <div className={classes.commonInfo}>
              <div className={classes.pinImg}>
                <MapPinIconBrown />
              </div>

              <div className={classes.info}>
                <div className={classes.subTitle}>
                  2, Patel Nagar, Navagam, Udhna, Surat-394210, Gujarat, India
                </div>
              </div>
            </div>

            <div className={classes.iconsList}>
              <LinkedinIconBrown />
              <FacebookIconBrown />
              <InstagramIconBrown />
              <TwitterIconBrown />
            </div>
          </div>
          <div className={classes.questionnaire}>
            <div className={classes.questionnaireDetail}>
              <h6 className={classes.title}>{'Got a Question?'}</h6>
              <Box>
                <Grid container columns={12} spacing={width <= 600 ? 2 : 8}>
                  <Grid item xs={6}>
                    <TextField
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      type='text'
                      label='F. Name'
                      className={classes.input}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      type='text'
                      label='L. Name'
                      className={classes.input}
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </Box>

              <TextField
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                label='Mobile Number'
                className={classes.input}
                fullWidth={true}
              />

              <TextField
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type='email'
                label='Email'
                className={classes.input}
                fullWidth={true}
              />

              <TextField
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                type='text'
                label='Comments'
                className={classes.input}
                inputProps={{}}
                fullWidth={true}
                multiline={true}
                rows={6}
              />

              <Button className={classes.submit} disableRipple onClick={() => { }}>
                Submit
              </Button>
            </div>
          </div>
        </div>

        <div className={classes.pitchus}>
          <h6 className={classes.title}>{'Pitch Us!'}</h6>
          <div className={classes.speechText}>Hello,</div>
          <div className={classes.speechText}>
            my name is *type your name* and my e-mail address is *type your email*
            and I would like to discuss about *type the details you want to
            discuss*.
          </div>
          <div className={classes.speechText}>Thanks!</div>

          <Button className={classes.submit} disableRipple onClick={() => { }}>
            Submit
          </Button>
        </div>

        <div className={classes.careers}>
          <h6 className={classes.title}>{'Careers'}</h6>
          <div className={classes.careerForm}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container columns={12} spacing={width <= 600 ? 2 : width > 900 ? 20 : 8}>
                <Grid item xs={6}>
                  <TextField
                    value={careerFirstName}
                    onChange={(e) => setCareerFirstName(e.target.value)}
                    type='text'
                    label='F. Name'
                    className={classes.input}
                    fullWidth
                    sx={{ marginTop: '35px' }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    value={careerLastName}
                    onChange={(e) => setCareerLastName(e.target.value)}
                    type='text'
                    label='L. Name'
                    className={classes.input}
                    fullWidth
                    sx={{ marginTop: '35px' }}
                  />
                </Grid>
              </Grid>
            </Box>

            <TextField
              value={careerSelectPosition}
              onChange={(e) => setCareerSelectPosition(e.target.value)}
              type='text'
              label='Select Position'
              className={classes.input}
              inputProps={{}}
              fullWidth
              sx={{ marginTop: '35px' }}
            />

            <TextField
              value={careerEmail}
              onChange={(e) => setCareerEmail(e.target.value)}
              type='email'
              label='Email'
              className={classes.input}
              inputProps={{}}
              fullWidth
              sx={{ marginTop: '35px' }}
            />

            <div className={classes.attachment}>
              <div className={classes.attchText}>Attach Resume</div>

              <div className={classes.browse}>
                <div
                  className={classes.browseFile}
                  onClick={() => onBrowserFileClick()}
                >
                  Browse File
                </div>
                <div className={classes.docOrPdf}>Doc or Pdf*</div>
              </div>

              <input
                id='fileInput'
                style={{ display: 'none' }}
                ref={inputFile}
                onChange={handleFileUpload}
                type='file'
                accept='application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document'
              />
            </div>

            <Button className={classes.submit} disableRipple onClick={() => { }}>
              Submit
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
