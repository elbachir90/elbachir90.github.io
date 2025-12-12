# 📚 Guide d'utilisation Netlify CMS

## 🎯 Configuration terminée !

Votre interface d'administration Netlify CMS est maintenant configurée.

## 🚀 Étapes suivantes (à faire UNE SEULE FOIS)

### 1. Déployer votre site sur Netlify

1. Allez sur [netlify.com](https://www.netlify.com)
2. Cliquez sur "Add new site" > "Import an existing project"
3. Connectez votre compte GitHub
4. Sélectionnez le dépôt `elbachir90.github.io`
5. Laissez les paramètres par défaut
6. Cliquez sur "Deploy site"

### 2. Activer Netlify Identity

1. Dans votre tableau de bord Netlify, allez dans **Settings** > **Identity**
2. Cliquez sur **Enable Identity**
3. Sous **Registration preferences**, choisissez **Invite only** (pour que vous seul puissiez vous connecter)
4. Cliquez sur **Enable Git Gateway** (dans la section Services)

### 3. Créer votre compte administrateur

1. Dans **Identity** > **Invite users**
2. Entrez votre adresse email
3. Vous recevrez un email d'invitation
4. Cliquez sur le lien dans l'email pour créer votre mot de passe

## ✅ C'est prêt ! Comment ajouter un cours ?

### Méthode simple en 7 étapes :

1. **Allez sur** : `votre-site-netlify.app/admin`
   (ou `elbachir90.github.io/admin` si configuré sur GitHub Pages + Netlify)

2. **Connectez-vous** avec votre email et mot de passe

3. **Cliquez sur "Cours et TP"** dans le menu

4. **Cliquez sur "New Cours et TP"**

5. **Remplissez le formulaire** :
   - Choisissez la matière (Réseaux, Maths, etc.)
   - Choisissez le type (Cours, TP, TD)
   - Entrez le titre
   - Ajoutez un sous-titre (optionnel)
   - Sélectionnez la date
   - Écrivez une description
   - Ajoutez des tags (Entrée après chaque tag)
   - Mettez le lien vers votre fichier HTML

6. **Cliquez sur "Publish"** en haut à droite

7. **C'EST TOUT !** Le cours apparaît sur votre site automatiquement

## 📋 Structure des fichiers

Quand vous ajoutez un cours via Netlify CMS, il crée un fichier dans `_cours/` avec toutes les informations.

Vous n'avez **jamais besoin de toucher au code HTML** !

## ❓ Problèmes courants

### Je ne peux pas me connecter
- Vérifiez que vous avez bien activé Identity sur Netlify
- Vérifiez que vous avez accepté l'invitation par email

### Le cours n'apparaît pas
- Vérifiez que le cours est bien "Publié" (checkbox cochée)
- Attendez 1-2 minutes que Netlify redéploie le site
- Rafraîchissez la page avec Ctrl+F5

### J'ai oublié mon mot de passe
- Allez sur `votre-site.com/admin`
- Cliquez sur "Forgot password?"
- Suivez les instructions

## 🎓 Conseils

- **Nommez vos fichiers HTML clairement** : `cours-reseaux-tcp-ip.html`
- **Mettez des tags pertinents** : aide les étudiants à trouver les cours
- **Utilisez des descriptions claires** : 2-3 lignes suffisent
- **Sauvegardez en brouillon** si pas encore prêt à publier

## 🔒 Sécurité

- Ne partagez JAMAIS votre mot de passe administrateur
- Ne créez de compte que pour vous-même (Invite only activé)
- Netlify CMS enregistre tous les changements dans GitHub

Bon enseignement ! 🎉
