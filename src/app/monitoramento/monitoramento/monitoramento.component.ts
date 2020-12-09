import { Component, OnInit, ViewChild } from '@angular/core';
import { latLng, MapOptions, tileLayer, Map, Marker, icon } from 'leaflet';
import { Alerta, Endereco } from './../../core/model';
import { EnderecosService } from '../../enderecos/enderecos.service';
import { AlertasFiltro, MonitoramentoService } from '../monitoramento.service';
import * as L from 'leaflet';

@Component({
  selector: 'app-monitoramento',
  templateUrl: './monitoramento.component.html',
  styleUrls: ['./monitoramento.component.css']
})
export class MonitoramentoComponent implements OnInit {

  map: Map;
  mapOptions: MapOptions;
  locations: Endereco[] = [];
  totalRegistros = 0;
  filtro = new AlertasFiltro();
  alertas: Alerta[] = [];
  ultimoAlerta = null;
  alertaAtual = this.alertas.length - 1;
  firstpolyline;

  pointA = new L.LatLng(-22.598326207941426, -48.79537346296127);
  pointB = new L.LatLng(-22.598717671659575, -48.79408346087011);
  pointC = new L.LatLng(-22.598128711820998, -48.79387931994565);
  pointD = new L.LatLng(-22.597716438434677, -48.794797954105746);
  pointE = new L.LatLng(-22.597544311430568, -48.7946738437695);
  finalPoint = new L.LatLng(-22.597543, -48.794383);

  pointList = [this.pointA, this.pointB, this.pointC, this.pointD, this.pointE, this.finalPoint];

  @ViewChild('tabela', { static: true }) grid;
  constructor(
    private monitoramentoService: MonitoramentoService,
    private enderecoService: EnderecosService
  ) {
  }

  ngOnInit() {
    this.initializeMapOptions();
    console.log();
    this.pesquisar();
    this.enderecoService.todos().then(response => {
      this.locations = response['content'];
      console.log(this.locations);
      this.addMultipleMarker();
      this.ultimoAlerta = this.alertas.length - 1;


    });



    this.monitoramentoService.todos().then(response => {
      this.alertas = response['content'];
      console.log(this.alertas[this.alertas.length - 1]);
    });
  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;

    this.monitoramentoService.pesquisar(this.filtro)
      .then(resultado => {
        this.totalRegistros = resultado.total;
        this.alertas = resultado.alertas;
      });
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
    this.addCarMarker();

  }

  //FUNÇÃO QUE PUXA OS DADOS DO ARRAY E CONVERTE EM MARCADORES
  private addMultipleMarker() {
    this.locations.forEach((endereco) => {
      const marker = new Marker([endereco.latitude, endereco.longitude])
        .setIcon(
          icon({
            iconSize: [40, 50],
            iconAnchor: [13, 41],
            iconUrl: '/assets/pin-icon.png'
          }))
        .bindPopup('Rua São Paulo, 201 <br /> Residencial ')
      .openPopup();
    marker.addTo(this.map);
  });
}


  private addCarMarker() {
  const marker = new Marker([-22.598326207941426, -48.79537346296127])
    .setIcon(
      icon({
        iconSize: [50, 50],
        iconAnchor: [13, 41],
        iconUrl: '/assets/car.ico'
      }));
  marker.addTo(this.map);
}

route() {
  var firstpolyline = new L.Polyline(this.pointList, {
    color: 'red',
    weight: 3,
    opacity: 0.5,
    smoothFactor: 1
  });
  firstpolyline.addTo(this.map);
}

clear() {
  this.map.removeLayer(this.firstpolyline);
}
}
