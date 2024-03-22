#!/bin/bash

# Chemin du dossier source
source_dir="/home/pierre/projets/strapi/blog"

# Chemin du dossier de destination
destination_dir="/home/pierre/projets/strapi"

# Vérifier si le dossier source existe
if [ -d "$source_dir" ]; then
    # Déplacer tous les fichiers et dossiers du dossier source vers le dossier de destination
    mv "$source_dir"/* "$destination_dir"
    
    echo "Tous les fichiers et dossiers ont été déplacés de $source_dir vers $destination_dir."
else
    echo "Le dossier source $source_dir n'existe pas."
fi
