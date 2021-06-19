import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { WcagService } from '../shared/wcag.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(
    public modalController: ModalController,
    private wcagService: WcagService
  ) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

  themeChange() {
    this.wcagService.darkModeOn = !this.wcagService.darkModeOn;
    if (this.wcagService.darkModeOn) {
      document.body.setAttribute('color-theme', 'dark');
    } else {
      document.body.setAttribute('color-theme', 'light');
    }
  }

  fontSizeChange() {
    this.wcagService.fontSizeMode = !this.wcagService.fontSizeMode;
    if (this.wcagService.fontSizeMode) {
      document.body.setAttribute('font-size', 'big');
    } else {
      document.body.removeAttribute('font-size');
    }
  }

  letterSpacingChange() {
    this.wcagService.horizontalSpaceMode = !this.wcagService.horizontalSpaceMode;
    if (this.wcagService.horizontalSpaceMode) {
      document.body.setAttribute('font-spacing', 'space');
    } else {
      document.body.removeAttribute('font-spacing');
    }
  }
}
