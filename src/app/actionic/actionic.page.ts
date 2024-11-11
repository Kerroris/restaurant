import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-actionic',
  templateUrl: './actionic.page.html',
  styleUrls: ['./actionic.page.scss'],
})
export class ActionicPage implements OnInit {
  photo: SafeResourceUrl | undefined;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {}

  async takePhoto() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl
    });

    // Verifica que image.dataUrl no sea undefined antes de asignarlo
    if (image.dataUrl) {
      this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image.dataUrl);
      // Llama a la función para almacenar la imagen en la base de datos
      await this.savePhotoToDatabase(image.dataUrl);
    } else {
      console.error("Error: No se pudo obtener la URL de la imagen.");
    }
  }

  async savePhotoToDatabase(photoDataUrl: string) {
    const response = await fetch('http://localhost/savePhoto.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ photo: photoDataUrl })
    });

    const result = await response.json();
    if (result.success) {
      console.log("Foto guardada exitosamente");
    } else {
      console.error("Error al guardar la foto", result.error);
    }
  }
}
