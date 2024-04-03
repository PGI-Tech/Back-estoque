/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClasseModule } from './controllers/classe/classe.module';
import { CategoriaModule } from './controllers/categoria/categoria.module';
import { UnidadeModule } from './controllers/unidade/unidade.module';
import { PermissoesModule } from './controllers/permissoes/permissoes.module';
import { UsuariosModule } from './controllers/usuarios/usuarios.module';
import { ComposicaoModule } from './controllers/composicao/composicao.module';
import { EmbalagemModule } from './controllers/embalagem/embalagem.module';
import { MaquinaAgulhaModule } from './controllers/maquina-agulha/maquina-agulha.module';
import { EspecieAgulhaModule } from './controllers/especie-agulha/especie-agulha.module';
import { MarcaAgulhaModule } from './controllers/marca-agulha/marca-agulha.module';
import { TipoElasticoModule } from './controllers/tipo-elastico/tipo-elastico.module';
import { MarcaElasticoModule } from './controllers/marca-elastico/marca-elastico.module';
import { TipoLinhaModule } from './controllers/tipo-linha/tipo-linha.module';
import { ElasticoModule } from './controllers/elastico/elastico.module';
import { LinhaModule } from './controllers/linha/linha.module';
import { TecidoModule } from './controllers/tecido/tecido.module';
import { AgulhaModule } from './controllers/agulha/agulha.module';
import { TipoMovelModule } from './controllers/tipo-movel/tipo-movel.module';
import { TipoInsumoModule } from './controllers/tipo-insumo/tipo-insumo.module';
import { TipoMaquinaModule } from './controllers/tipo-maquina/tipo-maquina.module';

@Module({
  imports: [ClasseModule, CategoriaModule, UnidadeModule, PermissoesModule, UsuariosModule, ComposicaoModule, EmbalagemModule, MaquinaAgulhaModule, EspecieAgulhaModule, MarcaAgulhaModule, TipoElasticoModule, MarcaElasticoModule, TipoLinhaModule, ElasticoModule, LinhaModule, TecidoModule, AgulhaModule, TipoMovelModule, TipoInsumoModule, TipoMaquinaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
