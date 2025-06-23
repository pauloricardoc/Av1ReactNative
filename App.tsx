import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, ScrollView, Image } from "react-native";
import { styles } from './styles';

import nerdcast from './img/nerdcast.png';
import boletimFolha from './img/boletim-folha.png';
import homemMordeuCao from './img/homem-mordeu-cao.png';
import decreptos from './img/decreptos.png';
import mosqueteiros from './img/mosqueteiros.png';
import assunto from './img/assunto.png';
import softSkills from './img/soft-skills.png';
import vidas from './img/99vidas.png';
import superFeed from './img/super-feed.png';
import xControle from './img/x-controle.png';
import frangoFino from './img/frango-fino.png';
import codigoFonte from './img/codigo-fonte.png';

interface Podcast {
  id: string;
  title: string;
  grupo: string | undefined;
  episodio: number | undefined;
  image: string | undefined;
}

const App = () => {
  const [searchText, setSearchText] = useState<string>('');
  const [podcasts] = useState<Podcast[]>([
    { id: '1', title: 'NERDCAST', episodio: 1, grupo: 'Jovem Nerd', image: nerdcast },
    { id: '2', title: 'Boletim Folha', episodio: undefined, grupo: 'Folha de S. Paulo', image: boletimFolha },
    { id: '3', title: 'O Homem que Mordeu o Cão', episodio: undefined, grupo: 'Radio Comercial', image: homemMordeuCao },
    { id: '4', title: 'Decréptos', episodio: undefined, grupo: 'Decréptos Podcast', image: decreptos },
    { id: '5', title: 'Mosqueteiros', episodio: undefined, grupo: 'Evandro de Freitas', image: mosqueteiros },
    { id: '6', title: 'O Assunto', episodio: 18, grupo: 'G1', image: assunto },
    { id: '7', title: 'Soft Skills Engineering', episodio: 33, grupo: 'Jaimson Dance and Dave Smith', image: softSkills },
    { id: '8', title: '99Vidas', episodio: 4, grupo: '99Vidas', image: vidas },
    { id: '9', title: 'Super Feed', episodio: 12, grupo: 'Gigahertz', image: superFeed },
    { id: '10', title: 'X do controle', episodio: 3, grupo: 'X do controle', image: xControle },
    { id: '11', title: 'Frango Fino', episodio: 2, grupo: 'Frango Fino', image: frangoFino },
    { id: '12', title: 'Compilado do Código Fonte TV', episodio: 4, grupo: 'Código Fonte', image: codigoFonte },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.containerHead}>
        <Text style={styles.pasta}>📁</Text>
        <Text style={styles.titulo}>Podcasts</Text>
        <Text style={styles.menuExtra}>···</Text>
      </View>

      /* barra de pesqisa */
      <TextInput
        style={styles.input}
        onChangeText={setSearchText}
        value={searchText}
        placeholder="🔍 Pesquise podcasts ou adicione URL de RSS"
      />

      /* Lista */
      <View style={styles.divider} />

      <ScrollView style={styles.scroll}>
        
        <View >
          {podcasts.map(item => (
            <View key={item.id}>
              <View style={styles.podcastNovos}>
                <Image
                  source={item.image} 
                  style={styles.podcastImage}
                />
                <View style={styles.podcastTextContainer}>
                  <Text style={styles.podcastTitulo}>{item.title}</Text>
                  <Text style={styles.podcastGrupo}>{item.grupo}</Text>
                </View>
                <Text style={styles.epNumero}>{item.episodio}</Text>
              </View>
              <View style={styles.divider} />
            </View>
          ))}
        </View>
      </ScrollView>

      /* player */
      <View style={styles.playerBar}>
        <TouchableOpacity style={styles.botaoPlayer}>
          <Text style={styles.botaoPlayerText}>⏪</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoPlayer}>
          <Text style={styles.botaoPlayerText}>▶️</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoPlayer}>
          <Text style={styles.botaoPlayerText}>⏩</Text>
        </TouchableOpacity>

        <View style={styles.progressBar}>
          <View style={styles.barraConclusao} />
        </View>
      </View>

      /* navegação */
      <View style={styles.naveg}>
        <TouchableOpacity style={styles.navItemHome}>
          <Text style={styles.navText}>🔢 Podcasts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItemFilt}>
          <Text style={styles.navText}>🔽 Filtros</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItemExe}>
          <Text style={styles.navText}>🔍 Explorar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItemProx}>
          <Text style={styles.navText}>📑 Próximos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItemPerfil}>
          <Text style={styles.navText}>👤 Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default App;