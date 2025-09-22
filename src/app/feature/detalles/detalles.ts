import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

interface Libro {
  id: number;
  titulo: string;
  autor: string;
  descripcion: string;
  editorial: string;
  año: number;
  genero: string;
  imagen: string;
}

@Component({
  selector: 'app-detalles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalles.html',
  styleUrls: ['./detalles .scss'], // corregido el espacio extra
})
export class DetallesComponent implements OnInit {
  libros: Libro[] = [
    {
      id: 1,
      titulo: 'Cien años de soledad',
      autor: 'Gabriel García Márquez',
      descripcion: 'Una de las obras más importantes de la literatura latinoamericana.',
      editorial: 'Harper & Row',
      año: 1967,
      genero: 'Realismo mágico',
      imagen: 'https://example.com/cover1.jpg'
    },
    {
      id: 2,
      titulo: 'El Quijote',
      autor: 'Miguel de Cervantes',
      descripcion: 'La obra más famosa de la literatura española y universal.',
      editorial: 'Francisco de Robles',
      año: 1605,
      genero: 'Novela clásica',
      imagen: 'https://example.com/cover2.jpg'
    },
    {
      id: 3,
      titulo: 'La ciudad y los perros',
      autor: 'Mario Vargas Llosa',
      descripcion: 'Novela que critica la sociedad militarizada en Lima.',
      editorial: 'Seix Barral',
      año: 1963,
      genero: 'Novela moderna',
      imagen: 'https://example.com/cover3.jpg'
    },
  ];

  libro?: Libro;

  constructor(
    private title: Title,
    private meta: Meta,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // Capturar el id desde los query params y buscar el libro correspondiente
    this.route.queryParams.subscribe(params => {
      const id = Number(params['id']);
      this.libro = this.libros.find(l => l.id === id);

      // Si encontramos el libro, actualizamos los metadatos dinámicamente
      if (this.libro) {
        this.title.setTitle(`Biblioteca Web - ${this.libro.titulo}`);
        this.meta.updateTag({ name: 'description', content: this.libro.descripcion });
        this.meta.updateTag({ name: 'keywords', content: `${this.libro.titulo}, ${this.libro.autor}` });
        this.meta.updateTag({ name: 'author', content: 'Biblioteca Web' });

        // Open Graph dinámico
        this.meta.updateTag({ property: 'og:title', content: `Biblioteca Web - ${this.libro.titulo}` });
        this.meta.updateTag({ property: 'og:description', content: this.libro.descripcion });
        this.meta.updateTag({ property: 'og:image', content: this.libro.imagen });
        this.meta.updateTag({ property: 'og:type', content: 'website' });
      }
    });
  }
}


