import { Component, Input, OnInit } from '@angular/core';
import { Produto } from '../Produto';
import { WebService } from '../web.service';

@Component({
  selector: 'app-deletar',
  templateUrl: './deletar.component.html',
  styleUrls: ['./deletar.component.css'],
})
export class DeletarComponent implements OnInit {
  @Input() produtoParaDeletar: Produto;

  constructor(private web: WebService) {}

  ngOnInit(): void {
    this.deletar();
  }

  deletar() {
    this.web.deletarProduto(this.produtoParaDeletar).subscribe((res) => {
      if (res.ok == true) {
        alert('O produto foi deletado com sucesso!');
      } else {
        alert('O produto não foi deletado!');
      }
    });
  }
}
