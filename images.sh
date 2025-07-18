#!/bin/bash

# Skript för att ladda ner bilder till Ryska Freds-projektet

# Definiera målmappen för bilderna
IMAGE_DIR="public/images"

# Skapa mappen om den inte redan finns
mkdir -p "$IMAGE_DIR"

# Funktion för att ladda ner en bild
download_image() {
  local url="$1"
  local filename="$2"
  local filepath="$IMAGE_DIR/$filename"

  if [ -f "$filepath" ]; then
    echo "Bilden $filename finns redan. Hoppar över."
  else
    echo "Laddar ner $filename från $url..."
    if curl -L -s -o "$filepath" "$url"; then
      echo "Nedladdning av $filename lyckades."
    else
      echo "FEL: Kunde inte ladda ner $filename från $url."
    fi
  fi
}

# Ladda ner bilder
# Hero.tsx
download_image "https://images.pexels.com/photos/8728382/pexels-photo-8728382.jpeg" "hero-banner.jpeg"

# About.tsx
download_image "https://images.pexels.com/photos/8961336/pexels-photo-8961336.jpeg" "about-history.jpeg"

# Programs.tsx
download_image "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg" "program-konfliktmedling.jpeg"
download_image "https://images.pexels.com/photos/8465804/pexels-photo-8465804.jpeg" "program-fredsutbildning.jpeg"
download_image "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg" "program-internationellt-samarbete.jpeg"
download_image "https://images.pexels.com/photos/8961463/pexels-photo-8961463.jpeg" "program-paverkansarbete.jpeg"

# News.tsx
download_image "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg" "news-rapport-ekonomi.jpeg"
download_image "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg" "news-konferens-kvinnor.jpeg"
download_image "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg" "news-strava-beredskap.jpeg"

echo "Alla bildnedladdningar är klara."
