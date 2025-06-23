import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        paddingTop: 50,
    },

    containerHead: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    titulo: {
        flex: 1,
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        color: '#fff'
    },
    pasta: {
        flex: 1,
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 20,
        marginBottom: 10,
        textAlign: 'left',
        color: '#53cef1',
    },

        menuExtra: {
        flex: 1,
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 20,
        marginBottom: 10,
        textAlign: 'right',
        color: '#53cef1',
        
    },


    input: {
        backgroundColor: '#f0f0f0',
        padding: 15,
        marginHorizontal: 20,
        borderRadius: 10,
        marginBottom: 10,
    },
    divider: {
        height: 1,
        backgroundColor: '#e0e0e0',
    },
    scroll: {
        flex: 1,
        paddingHorizontal: 20,
    },

    podcastNovos: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
    },
    podcastImage: {
        width: 50,
        height: 50,
        borderRadius: 10,
        marginRight: 15,
        backgroundColor: '#e0e0e0', // se erro
    },
    podcastTextContainer: {
        flex: 1,

    },
    podcastTitulo: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff'
    },
    podcastGrupo: {
        fontSize: 14,
        color: '#666',
        marginTop: 5,
        
    },
    epNumero: {
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 15,
        width: 30,
        textAlign: 'right',
        color: '#fff',
    },
    playerBar: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    progressBar: {
        flex: 1,
        height: 7,
        backgroundColor: '#69614e',
        borderRadius: 5,
        marginRight: 15,
        overflow: 'hidden',
    },
    barraConclusao: {
        width: '30%', // Valor progresso
        height: '100%',
        backgroundColor: '#ccbb91',
    },
    botaoPlayer: {
        width: 40,
        height: 40,
        borderRadius: 10,
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    botaoPlayerText: {
        fontSize: 15,
    },
    naveg: {
        flexDirection: 'row',
        paddingVertical: 20,
    },
    navItemHome: {
        flex: 1,
        paddingHorizontal: 10,
        paddingInline: 20,
        
    },
    navItemFilt: {
        flex: 1,
        paddingInline: 10,
    },
    navItemExe: {
        flex: 1,
        paddingInline: 10,
    },
    navItemProx: {
        flex: 1,
        paddingInline: 10,
    },
    navItemPerfil: {
        flex: 1,
        paddingHorizontal: 20,
    },
    navText: {
        fontSize: 14,
        color: '#fff',
    },
});