import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { HTTP } from '@ionic-native/http';

@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html'
})
export class CameraPage {

  imageURI:any;
  imageFileName:any;
  public plate: string;

  public base64Image: string;

  constructor(public navCtrl: NavController,
    private transfer: FileTransfer,
    private camera: Camera,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private http: HTTP) {
    this.navCtrl = navCtrl;
    this.http = http;
    this.plate = '';
  }

  getImage() {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      sourceType: this.camera.PictureSourceType.CAMERA
    }
  
    this.camera.getPicture(options).then((imageData) => {
      this.base64Image = imageData;
      console.log(imageData)
    }, (err) => {
      console.log(err);
      this.presentToast(err);
    });
  }
  uploadFoto(){
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }
  
    this.camera.getPicture(options).then((imageData) => {
      this.base64Image = imageData;
      console.log(imageData)
    }, (err) => {
      console.log(err);
      this.presentToast(err);
    });
  }
  uploadFile() {
    let loader = this.loadingCtrl.create({
      content: "Uploading..."
    });
    loader.present();
    this.http.post('http://192.168.1.110:5000/image', {img: this.base64Image}, {})
    .then(data => {
      loader.dismiss();
      this.presentToast(data.data); // data received by server
      this.plate = data.data.plate;
      console.log(data.headers);
  
    })
    .catch(error => {
      loader.dismiss();
      console.log(error.status);
      console.log(error.error); // error message as string
      console.log(error.headers);
      this.presentToast('err');
    });
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }
}
