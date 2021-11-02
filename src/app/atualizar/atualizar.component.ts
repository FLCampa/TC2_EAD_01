import { Component, Input, OnInit } from '@angular/core';
import { Produto } from '../Produto';
import { WebService } from '../web.service';

@Component({
  selector: 'app-atualizar',
  templateUrl: './atualizar.component.html',
  styleUrls: ['./atualizar.component.css'],
})
export class AtualizarComponent implements OnInit {
  @Input() produtoParaAtualizar: Produto;

  constructor(private web: WebService) {}

  ngOnInit(): void {}

  atualizar() {
    this.web.atualizarProduto(this.produtoParaAtualizar).subscribe((res) => {
      if (res.ok == true) {
        alert('O produto foi atualizado com sucesso!');
      } else {
        alert('O produto não foi atualizado!');
      }
    });
  }
}
