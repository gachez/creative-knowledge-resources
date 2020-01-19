import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './Home';
import VideosPage from './videos-pages/VideosPage'
import PublicationPage from './publication-pages/PublicationPage'
import ImagesPage from './image-pages/ImagesPage'
import VideosPageContent from './videos-pages/VideosPageContent'
import PublicationPageContent from './publication-pages/PublicationPageContent'
import Donate from './donate-pages/Donate'
import Contact from './contact-pages/Contact-us'
import UploadPin from './upload-pages/UploadPin'
import ChooseContent from './upload-pages/ChooseContent' 
import ImageUploadPage from './upload-pages/image-upload/imageUploadTag'
import AddImageContent from './upload-pages/image-upload/AddImageContent'
import ImagePreview from './upload-pages/image-upload/ImagePreview'
import ImageContentUpload from './upload-pages/image-upload/ImageContentUpload'
import CancelConfirmation from './upload-pages/CancelConfirmation'
import UploadSuccesful from './upload-pages/UploadSuccesful'
import VideoUploadTag from './upload-pages/video-upload/VideoUploadTag'
import PublicationUploadTag from './upload-pages/publication-upload/PublicationUploadTag';
import AddPublicationContent from './upload-pages/publication-upload/AddPublicationUpload';
import PublicationPreview from './upload-pages/publication-upload/PublicationPreview'
import PublicationContentUpload from './upload-pages/publication-upload/PublicationContentUpload';
import AddVideoContent from './upload-pages/video-upload/AddVideoContent'
import VideoPreview from './upload-pages/video-upload/VideoPreview';
import VideoContentUpload from './upload-pages/video-upload/VideoContentUpload';

const App = () =>{
    
                return(

                             <BrowserRouter>
                                 <Switch>
                                 <Route exact path={"/"} component={Home}></Route>
                                 <Route  path={"/videos"} component={VideosPage}></Route>                     
            <Route  path={"/publications"} component={PublicationPage}></Route>
            <Route path={"/images-page"} component={ImagesPage}></Route>
            <Route path={"/videos-page-content"} component={VideosPageContent}></Route>
            <Route path={"/publication-page-content"} component={PublicationPageContent}></Route>
            <Route path={"/donate"} component={Donate}></Route>
            <Route path={"/contact-us"} component={Contact}></Route>
            <Route path={"/upload-pin"} component={UploadPin}></Route>
            <Route path={"/choose-content"} component={ChooseContent}></Route>
            <Route path={"/image-upload-tag"} component={ImageUploadPage}></Route>
            <Route path={"/add-image-content"} component={AddImageContent}></Route>
            <Route path={"/image-preview"} component={ImagePreview}></Route>  
            <Route path={"/image-content-upload"} component={ImageContentUpload}></Route>
            <Route path={"/cancel-confirmation"} component={CancelConfirmation}></Route>                     
            <Route path={"/upload-success"} component={UploadSuccesful}></Route>
            <Route path={"/video-upload-tag"} component={VideoUploadTag}></Route>      
            <Route path={"/publication-upload-tag"} component={PublicationUploadTag}></Route>   
            <Route path={"/add-publication-content"} component={AddPublicationContent}></Route>  
            <Route path={"/publication-preview"} component={PublicationPreview}></Route>     
            <Route path={"/publication-content-upload"} component={PublicationContentUpload}></Route>
            <Route path={"/add-video-content"} component={AddVideoContent}></Route>   
            <Route path={"/video-preview"} component={VideoPreview}></Route>
            <Route path={"/video-content-upload"} component={VideoContentUpload}></Route>
                                 </Switch>
           
            </BrowserRouter>
                      
                        
                                  
                        
        )
    
}

export default App;

