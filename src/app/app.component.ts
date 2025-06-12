// app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

// PrimeNG Imports
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { BadgeModule } from 'primeng/badge';
import { DividerModule } from 'primeng/divider';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';
import { MenubarModule } from 'primeng/menubar';

interface LotSection {
  id: string;
  name: string;
  description: string;
  totalLots: number;
  availableLots: number;
  minSize: number;
  maxSize: number;
  priceRange: string;
  features: string[];
  coordinates: { x: number; y: number };
  status: 'available' | 'limited' | 'sold-out';
}

interface SectionInfo {
  id: string;
  name: string;
  description: string;
  lots: number;
  status: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    DialogModule,
    BadgeModule,
    DividerModule,
    TagModule,
    TooltipModule,
    MenubarModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate(
          '300ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
    ]),
  ],
})
export class AppComponent {
  selectedSection: LotSection | null = null;
  displayModal: boolean = false;

  sections: LotSection[] = [
    {
      id: 'A',
      name: 'Sección Alameda',
      description: 'Lotes con vista al campo de golf y fácil acceso',
      totalLots: 45,
      availableLots: 28,
      minSize: 800,
      maxSize: 1200,
      priceRange: '120-180',
      features: [
        'Vista al golf',
        'Acceso pavimentado',
        'Servicios completos',
        'Seguridad 24hs',
      ],
      coordinates: { x: 15, y: 85 },
      status: 'available',
    },
    {
      id: 'B',
      name: 'Sección Bosque',
      description: 'Lotes amplios rodeados de vegetación natural',
      totalLots: 38,
      availableLots: 22,
      minSize: 1000,
      maxSize: 1500,
      priceRange: '140-200',
      features: [
        'Entorno natural',
        'Lotes amplios',
        'Privacidad',
        'Club house cercano',
      ],
      coordinates: { x: 25, y: 70 },
      status: 'available',
    },
    {
      id: 'C',
      name: 'Sección Central',
      description: 'Ubicación privilegiada en el corazón del desarrollo',
      totalLots: 52,
      availableLots: 31,
      minSize: 900,
      maxSize: 1300,
      priceRange: '160-220',
      features: [
        'Ubicación central',
        'Fácil acceso',
        'Servicios premium',
        'Vista panorámica',
      ],
      coordinates: { x: 12, y: 55 },
      status: 'available',
    },
    {
      id: 'D',
      name: 'Sección Deportiva',
      description: 'Cerca de las instalaciones deportivas y recreativas',
      totalLots: 41,
      availableLots: 19,
      minSize: 850,
      maxSize: 1250,
      priceRange: '130-190',
      features: [
        'Cerca del club',
        'Instalaciones deportivas',
        'Área recreativa',
        'Estacionamiento',
      ],
      coordinates: { x: 20, y: 40 },
      status: 'available',
    },
    {
      id: 'E',
      name: 'Sección Ejecutiva',
      description: 'Lotes premium con las mejores vistas y ubicación',
      totalLots: 29,
      availableLots: 12,
      minSize: 1200,
      maxSize: 1800,
      priceRange: '200-280',
      features: [
        'Lotes premium',
        'Vista exclusiva',
        'Mayor privacidad',
        'Acceso VIP',
      ],
      coordinates: { x: 45, y: 25 },
      status: 'limited',
    },
  ];
}
