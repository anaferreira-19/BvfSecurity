import { Component, OnInit } from '@angular/core';
import { latLng, MapOptions, tileLayer, Map, Marker, icon } from 'leaflet';
import { MonitoramentoService } from '../monitoramento.service';

//ARRAY DE COORDENADAS
var locations = [
  [-22.597543, -48.794383],
  [-22.5981383, -48.7960083],
  [-22.596483347020648, -48.7896770178294]
];

@Component({
  selector: 'app-monitoramento',
  templateUrl: './monitoramento.component.html',
  styleUrls: ['./monitoramento.component.css']
})
export class MonitoramentoComponent implements OnInit {

  map: Map;
  mapOptions: MapOptions;

  constructor(
    private monitoramentoService: MonitoramentoService,

  ) { }

  ngOnInit(): void {
    this.initializeMapOptions();
  }

  // CONFIGURAÇÃO PRINCIPAL DO MAPA --- VISUALIZAÇÃO
  private initializeMapOptions() {
    this.mapOptions = {
      center: latLng(-22.597270, -48.794458),
      zoom: 12,
      layers: [
        tileLayer(
          'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          {
            maxZoom: 18,
            attribution: 'Map data © OpenStreetMap contributors'
          })
      ],
    };
  }
  // ADICIONA MARCADOR CONFIGURADO NO MAPA NA VARIÁVEL DE ENDEREÇO
  onMapReady(map: Map) {
    this.map = map;
    this.addMultipleMarker();
    this.addCarMarker();
  }

//FUNÇÃO QUE PUXA OS DADOS DO ARRAY E CONVERTE EM MARCADORES
  private addMultipleMarker() {
    for (var i = 0; i < locations.length; i++) {
      const marker = new Marker([locations[i][0], locations[i][1]])
        .setIcon(
          icon({
            iconSize: [40, 50],
            iconAnchor: [13, 41],
            iconUrl: '/assets/pin-icon.png'
          }));
      marker.addTo(this.map);
    }
  }

  private addCarMarker() {
    const marker = new Marker([-22.598895719241007, -48.795203520553535])
      .setIcon(
        icon({
          iconSize: [50, 50],
          iconAnchor: [13, 41],
          iconUrl: '/assets/car.ico'
        }));
    marker.addTo(this.map);
  }


  // CONSTRUÇÃO DA TABELA ALERTAS RECENTES


}
