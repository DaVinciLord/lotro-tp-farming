import React, {Component} from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="App container-fluid">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>LOTRO TP Farming Guide T</h2>
                </div>

                <div>
                    <div>
                        <section className="well">
                            <h2 id="toc">Sommaire</h2>
                            <a href="#foreword">Avant-propos</a> <br />
                            <a href="#introduction">Prologue</a> <br />
                            <a href="#farming">Le FARM</a> <br />
                        </section>
                    </div>
                </div>

                <div>
                    <div>
                        <section className="well" id="foreword">
                            <h2>Avant-Propos</h2>
                            <p className="text-left">
                                Bienvenue dans ce guide pour farmer des Points Turbine (TP) pour LOTRO.
                                Ces TP vont vous permettre d'acheter les différents packs de quêtes et autres objets
                                dans le LOTRO Store et cela en F2P (moyennant un certain temps de farming).
                            </p>
                            <div className="row">
                                <div className="col-lg-12">
                                    <section id="raceclass" className="text-left">
                                        <h3>Race/Classe</h3>
                                        <p>
                                            Pour effectuer le plus rapidement ce farming il est important de choisir la
                                            bonne Race et la bonne Classe.
                                        </p>
                                        <p>
                                            Pour la Race, les Hommes ont le prologue le plus court et est donc très
                                            intéressant d'un point de vue gain de temps. Les Nains peuvent également
                                            être utilisés pour un gain de 5 TP car vous allez effectuer
                                            la prouesse de Race <strong>Ennemi des gobelins</strong>.
                                        </p>
                                        <p>
                                            La classe est aussi importante, ainsi il vaut mieux prendre un Ménestrel, à
                                            partir du Niveau 5
                                            il possède des compétences lui permettant de one shot presque tous les
                                            ennemis.
                                            Ne pas oublier de prendre la spécialisation rouge et d'organiser les
                                            compétences comme suit:
                                            <ul>
                                                <li>1 Ballade Parfaite</li>
                                                <li>2 Ballade Mineure</li>
                                                <li>3 Coda de Fureur</li>
                                                <li>4 Cri Perçant Dissonant</li>
                                                <li>5 Appel du Destin</li>
                                                <li>0 Sifflet pour le Cheval</li>
                                                <li>) Retourner à Archet</li>
                                            </ul>
                                        </p>
                                    </section>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

                <div>
                    <div>
                        <section className="well" id="introduction">
                            <h2>Prologue</h2>
                            <p className="text-left">
                                Pour le prologue, il n'y a pas grand chose à dire excepté qu'il ne faut pas prendre
                                d'autres quêtes que celles nécessaires pour le finir. <br />
                                Donc vous faîtes le prologue jusqu'à la fin de la bataille <strong>d'Archet</strong>.
                            </p>
                        </section>
                    </div>
                </div>


                <div>
                    <div>
                        <section className="well" id="farming">
                            <h2>LE FARM</h2>
                            <section className="text-left">
                                <h3><u>Archet</u></h3>
                                <p>
                                    C'est ici que le vrai farming commence. <br />
                                </p>
                                <p>
                                    Pour commencer, allez parler à <strong>Jon Fougerine</strong> pour lui rendre la
                                    quête que vous venez de terminer.
                                </p>
                                <p>
                                    Regardez dans la boîte aux lettres pour prendre la lettre <strong>Un message de
                                    remerciements</strong>. <br />
                                </p>
                                <p>
                                    Ouvrez le cadeau qui est dans le sac et accepter la quête qui est dans l'objet
                                    <strong>Lettre de recommendation</strong>. <br />
                                </p>
                                <p>
                                    Parlez à <strong>L'Agent de l'Ordre Lainechardon</strong> pour rendre la quête
                                    <strong>Un message de remerciements</strong> pour avoir des <strong>Jetons de
                                    Salutations</strong>.
                                </p>
                                <p>
                                    Échangez-les contre une <strong>Marque de novice</strong>, une
                                    <strong>Essence</strong> et un <strong>Beaume</strong> auprès de <strong>L'agent de
                                    l'Ordre Lainechardon</strong>. <br />
                                </p>
                                <p>
                                    Mettez le point de repère à <strong>Archet</strong> et activer le sifflet du Cheval
                                    (s'il n'est pas dans le sac, soyez sûr d'être niveau 6 et d'avoir ouvert le cadeau).
                                </p>
                                <p>
                                    <strong>ATTENTION! UNE FOIS LE CADEAU ROUGE OUVERT VOUS N'AUREZ QUE 24H POUR
                                        EFFECTUER LA SUITE DE CE GUIDE!!!</strong> <br />
                                </p>
                                <p>
                                    Allez en direction de <strong>Combe</strong> puis activer <strong>L'écrit de
                                    Passage</strong>, qui vous permettra de voyager dans certains contrées gratuitement
                                    pendant 1 heure, avant de parler au <strong>Maître des écuries</strong> et de
                                    voyager vers <strong>Celondim</strong>, dans la terre des Elfes.
                                </p>

                                <h3><u>Celondim</u></h3>
                                <p>
                                    Une fois arrivé, allez parler à <strong>Eillan</strong> (28.6S, 92.0W) pour accepter
                                    la quête <strong><u>Aux ordres de Cardavor</u></strong>. <br />
                                </p>
                                <p>
                                    Allez le voir et prenez la quête <strong><u>Ça ne ressemble pas à
                                    Avorthal</u></strong>.
                                    Prenez également la quête <strong><u>La défense de la forêt</u></strong> auprès de
                                    <strong>Laenlin</strong> juste derrière vous. <br />
                                </p>
                                <p>
                                    Allez à <strong>Nen Hilith</strong> (n'oubliez pas de tuer les bestioles pour la
                                    quête de <strong>Laenlin</strong>), parlez au PNJ pour finir la quête de <strong>Cardavor</strong>
                                    et prenez toutes les quêtes proposées. <br />
                                </p>
                                <p>
                                    Descendez dans la vallée et remplissez les conditions pour finir les quêtes tout en
                                    prenant un <strong>Collier de Fer</strong> puis activez-le. Tant que vous y êtes,
                                    finissez la prouesse <strong>Tueur de Loup</strong> avant d'aller rendre les quêtes.
                                    <br />
                                </p>
                                <p>
                                    Prenez les quêtes suivantes puis retournez tuer des loups pour finir la prouesse
                                    <strong>Tueur de loup (avancé)</strong> avant de retourner à
                                    <strong>Celondim</strong>. <br />
                                </p>
                                <p>
                                    De retour, rendez toutes les quêtes et prenez celles proposées par
                                    <strong>Bregedur</strong> (<strong><u>A la recherche d'un tonneau</u></strong>),
                                    <strong>Cardavor</strong> (<strong><u>La colère des elfes</u></strong>) et <strong>Thinglaer</strong>
                                    (<strong><u>Le sol sacré</u></strong>) puis dirigez-vous vers <strong>Tham
                                    Gelair</strong>. <br />
                                </p>
                                <p>
                                    Faîtes la quête puis allez en direction des <strong>Vignobles de Linael</strong>
                                    pour prendre toutes les quêtes. (<strong><u>Un cahmp à glâner</u></strong> et
                                    <strong><u>Une cuvée d'exception</u></strong>) <br />
                                </p>
                                <p>
                                    Allez les faire et n'hésitez pas à tuer des gobelins (juste le nécessaire, vous
                                    finirez cette prouesse plus tard). <br />
                                </p>
                                <p>
                                    Rendez les quêtes aux <strong>Vignobles de Limael</strong> et ne prenez que celle
                                    intitulée <strong><u>Apportez le Tonneau</u></strong> avant de retourner à <strong>Celondim</strong>.
                                    Vous débloquerez également la prouesse <strong>Allié de l'Ered Luin</strong>. <br />
                                </p>
                                <p>
                                    De retour à <strong>Celondim</strong>, finissez les quêtes et prenez les suivantes
                                    de <strong>Bregedur</strong> (<strong><u>Cadeau pour une amie</u></strong>),
                                    <strong>Cardavor</strong>(<strong><u>Le maître du refuge</u></strong>) et <strong>Thinglaer</strong>
                                    (<strong><u>La veillé de Callengil</u></strong>). <br />
                                </p>
                                <p>
                                    Aller vers le maître des écuries et acceptez la quête de <strong>Torron</strong>
                                    (<strong><u>Départ de la Terre du Milieu</u></strong>) avant de de prendre un voyage
                                    pour <strong>Duillond</strong>.
                                </p>

                                <h3><u>Duillond</u></h3>
                                <p>
                                    Arrivé à <strong>Duillond</strong>, finnisez vos quêtes tout en prenant celles de
                                    <strong>Calengil</strong> (<strong><u>La potion purificatrice</u></strong>),
                                    <strong>Bregar</strong> (<strong><u>Nuisance à Dol Ringwest</u></strong> et <strong><u>Ce
                                    qui a été perdu</u></strong>) et <strong>Dorongur</strong>
                                    (<strong><u>L'émissaire</u></strong>). <br />
                                </p>
                                <p>
                                    Finissez la quête de <strong>Calengil</strong>, <strong><u>La potion
                                    purificatrice</u></strong>, rendez la, et acceptez <strong><u>Le nettoyage des
                                    ruines</u></strong> et <strong><u>Une affaire préoccupante</u></strong>. <br />
                                </p>
                                <p>
                                    Direction <strong>Dol Ringwest</strong> pour y faire toutes les quêtes que vous
                                    pouvez (ainsi que la prouesse <strong>Tueur de gobelins (avancé)</strong>) avant de
                                    retourner à <strong>Duillond</strong> pour les rendre.
                                    Puis prendre celle de <strong>Calengil</strong> (<strong><u>La veillée de Glamir</u></strong>).
                                    <br />
                                </p>
                                <p>
                                    Revenez à <strong>Celondim</strong> (via le maître des écuries) et partez en
                                    direction de la <strong>Porte de Thorin</strong> (via le voyage rapide du maître des
                                    écuries). <br />
                                </p>

                                <h3><u>Les Portes de Thorin</u></h3>
                                <p>
                                    Une fois arrivé, aller visiter la <strong>Cour de Frerin</strong> [15.0S, 103.2W],
                                    ainsi que les <strong>Portes de Thorin</strong> [13.8S, 103.2W]. <br />
                                </p>
                                <p>
                                    Partez en direction des <strong>Mine du Gouffre d'Argent</strong> [14.3S, 101.7W],
                                    avant de revenir aux maître des écuries et de voyager vers <strong>Noglond</strong>.
                                    <br />
                                </p>
                                <p>
                                    Une fois arrivé, prenez la quête <strong><u>Des cordes à couper</u></strong> donnée
                                    par <strong>Grimkell</strong>. <br />
                                </p>
                                Aller faire cette quête, rendez-là, puis prenez la suivante, <strong><u>La chasse aux
                                gobelins</u></strong>, toujours par <strong>Grimkell</strong>. <br />
                                <p>
                                    Récupérer le Fétiche, rendez-le et prenez <strong><u>Des malfaisants dans la
                                    vallée</u></strong>, toujours par <strong>Grimkell</strong>. <br />
                                </p>
                                <p>
                                    Pour cette quête, vous pouvez activer tous les boosts que vous avez, sauf <i>Accélérateur
                                    de prouesse de tueur</i>, <i>Source d'XP</i> et <i>Bonus de Vitesse de Course</i>.
                                    Finissez également la prouesse <strong>Tueur de Gobelins (avancé)</strong>. <br />
                                </p>
                                <p>
                                    La quête finie, revenez vers <strong>Grimkell</strong> pour prendre <strong><u>Des
                                    gobelins au sud</u></strong> et partez vers <strong>Gondamon</strong> gâce au maître
                                    des écuries. <br />
                                </p>
                                <p>
                                    Rendez les quêtes que vous avez, tout en prenant celles de <strong>Gailthin</strong>
                                    (<strong><u>Un camp suspect</u></strong> et <strong><u>La pierre
                                    Elfique</u></strong>), <strong>Askell</strong> (<strong><u>Le bouclier
                                    brisé</u></strong>) et <strong>Orlygr</strong> (<strong><u>Une escorte pour les
                                    chasseurs</u></strong>). <br />
                                </p>
                                <p>
                                    Aller à <strong>Vallanneau</strong> [17.6S, 96.0W], finir les quêtes et la prouesse
                                    <strong>Tueur de Brigand (avancé)</strong>. <br />
                                </p>
                                <p>
                                    Aller à <strong>Haudh Lin</strong> et parler à <strong>Glamir</strong>. Rendre les
                                    quêtes et aller au Nord vers <strong>Les Eaux Troubles</strong> [18.0S, 95.0W].
                                    <br />
                                </p>
                                <p>
                                    Retourner à Gondamon pour rendre les quêtes. Prendre <strong><u>Des Alliés
                                    Réticents</u></strong> de <strong>Gaithlin</strong>. Aller voir
                                    <strong>Mathi</strong> et prendre la quête (<strong><u>Une Antipahtie
                                    mutuelle</u></strong>). <br />
                                </p>
                                <p>
                                    Direction le <strong>Pavillon de chasse de Thrasi</strong>, avec le maître des
                                    écuries. <br />
                                </p>
                                <p>
                                    Rendez vos quêtes et prenez celles de <strong>Thrasi</strong> (<strong><u>Le
                                    miaulement du chat</u></strong>), <strong>Celairant</strong> (<strong><u>Un arc en
                                    tout point remarquable</u></strong>) et faîtes l'instance proposée par <strong>Langlas</strong>.
                                    <br />
                                </p>
                                <p>
                                    Aller dans la vallée mais ne pas intéragir avec l'objet. Tuer tous les Hendrovals
                                    [20.8S, 94.2W] pour la prouesse <strong>Tueur d'Hendrovals</strong>. <br />
                                </p>
                                <p>
                                    Ensuite, intéragir avec l'objet pour faire réapparaître les oiseaux, activez <i>l'Accélérateur
                                    de Prouesse de Tueur</i> et finir <strong>Tueur d'Hendrovals (avancé)</strong>.
                                    <br />
                                </p>
                                <p>
                                    Aller à La <strong>Tour de Défense</strong> [17.8S, 90.1W] puis faire les prouesses
                                    sur les Arraignées [19.2S, 91.0W] (<strong>Tueur et Tueur (avancé)</strong>). <br />
                                </p>
                                <p>
                                    Partez pour Kheledul et finissez la quête <strong><u>Un arc en tout point
                                    remarquable</u></strong> en tuant Starkath [20.9S, 92.4W], avant de faire l'instance
                                    de <strong>Svanr</strong>. <br />
                                </p>
                                <p>
                                    Pendant l'instance, n'oubliez de visiter la <strong>Tour de Kheledul</strong> et les
                                    <strong>Docks de Kheledul</strong>. <br />
                                </p>
                                <p>
                                    Retourner à la <strong>Cabane de Thrasi</strong> et rendre les quêtes. La prouesse
                                    <strong>Héros d'Ered Luin</strong> devrait tomber, sinon faîtes la quête de <strong>Thrasi</strong>
                                    (<strong><u>Des bouches à nourrir</u></strong>). <br />
                                </p>
                            </section>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
