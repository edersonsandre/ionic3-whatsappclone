import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import {
  CameraPreview,
  CameraPreviewPictureOptions,
  CameraPreviewOptions,
  CameraPreviewDimensions
} from "@ionic-native/camera-preview";

/**
 * Generated class for the CameraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-camera",
  templateUrl: "camera.html"
})
export class CameraPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private cameraPreview: CameraPreview
  ) {
    const cameraPreviewOpts: CameraPreviewOptions = {
      x: 0,
      y: 0,
      width: window.screen.width,
      height: window.screen.height,
      camera: "front",
      tapPhoto: false,
      tapToFocus: true,
      previewDrag: false,
      toBack: true
    };

    // start camera
    this.cameraPreview.startCamera(cameraPreviewOpts).then(
      res => {
        this.cameraPreview.setFocusMode("auto");
        console.log(res);
      },
      err => {
        console.error(err);
      }
    );
  }

  ionViewDidLoad() {
    this.cameraPreview.show();
  }

  ionViewDidLeave() {
    this.cameraPreview.stopCamera();
  }
}
