import { Component, OnInit } from '@angular/core';
import { Produto } from '../Produto';
import { WebService } from '../web.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
})
export class ListarComponent implements OnInit {
  listaProdutos: Produto[];
  produtoSelecionadoParaAtualizar: Produto;
  produtoSelecionadoParaDeletar: Produto;

  constructor(private web: WebService) {}

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.web.getProdutos().subscribe((res) => {
      this.listaProdutos = res;
    });
  }

  atualizarProduto(produto: Produto): void {
    this.produtoSelecionadoParaAtualizar = produto;
  }

  deletarProduto(produto: Produto): void {
    this.produtoSelecionadoParaDeletar = produto;
  }
}
