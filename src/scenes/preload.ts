import {Scene} from 'phaser';
import * as manifest from '../../manifest.json';

const MB = 1024 * 1024;

export class Preload extends Scene {
  totalDownloadSize: number;
  totalDownloadSizeFormatted: string;
  downloadedSize: number;

  constructor() {
    super({
      key: 'PreloadScene',
    });

    this.totalDownloadSize = 0;
    this.downloadedSize = 0;

    Object.keys(manifest).forEach((fileType: string) => {
      Object.keys(manifest[fileType]).forEach((key) => {
        this.totalDownloadSize += manifest[fileType][key].size;
      });
    });

    this.totalDownloadSizeFormatted = Math.round(this.totalDownloadSize / MB).toString();
  }

  preload() {
    const progressBar = this.add.graphics();
    const progressBox = this.add.graphics();
    const width = this.cameras.main.width;
    const height = this.cameras.main.height;
    const textStyle = {
      font: '18px monospace',
      fill: '#ffffff',
    };
    const x = width / 2;

    const loadingText = this.make.text({
      x: x,
      y: height / 2 - 50,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        fill: '#ffffff',
      },
    });
    loadingText.setOrigin(0.5, 0.5);

    const percentText = this.make.text({
      x: x,
      y: height / 2 - 5,
      text: '0%',
      style: textStyle,
    });
    percentText.setOrigin(0.5, 0.5);

    const assetText = this.make.text({
      x: x,
      y: height / 2 + 50,
      text: '',
      style: textStyle,
    });

    assetText.setOrigin(0.5, 0.5);

    const totalText = this.make.text({
      x: x,
      y: height / 2 + 100,
      text: '',
      style: textStyle,
    });

    totalText.setOrigin(0.5, 0.5);

    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(240, 270, 320, 50);

    this.load.on('fileprogress', (file) => {
      const previousLoad = file.previousLoad || 0;

      this.downloadedSize += file.bytesLoaded - previousLoad;

      const value = (this.downloadedSize / this.totalDownloadSize);

      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(250, 280, 300 * value, 30);


      assetText.setText('Loading asset: ' + file.key);
      percentText.setText((value * 100).toFixed(2) + '%');

      const downloadInfo = (this.downloadedSize / MB).toFixed(2) + 'MB / ' + this.totalDownloadSizeFormatted + 'MB';
      totalText.setText(downloadInfo);

      file.previousLoad = file.bytesLoaded;
    });

    this.load.on('complete', function() {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
      assetText.destroy();
    });

    // use manifest.json to load all assets
    Object.keys(manifest).forEach((fileType: string) => {
      Object.keys(manifest[fileType]).forEach((key) => {
        const assetVars = manifest[fileType][key];
        const url = 'assets/' + fileType + '/' + assetVars['file'];

        this.load[fileType](key, url);
      });
    });
  }
}
