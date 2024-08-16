import pygame, sys
from pygame.locals import *

pygame.init()
DISPLAY = pygame.display.set_mode((1500, 900))

pygame.display.set_caption("Neues Pygame-Programm")

PINK = (200, 0, 200)
BLAU = (20, 20, 180)
HELLBLAU = (0, 190, 255)
SCHWARZ = (0,0,0)
x = 600
y = 100
xBild = 100
yBild = 100
breite = 250
höhe = 250
spongebild = pygame.image.load("sponge.jpg") #Bild laden
sponge = pygame.transform.scale(spongebild, (breite, höhe)) #Bild auf eine Größe skalieren
richtung = "nichts" #!!!

while True:
	for event in pygame.event.get():
		if event.type == QUIT:
			pygame.quit()
			sys.exit()
		if event.type == KEYDOWN:
			#print("taste gedrückt")
			if event.key == K_LEFT:
				richtung = "links" #HINWEIS
			if event.key == K_RIGHT:
				richtung = "rechts"
			if event.key == K_UP:
				richtung = "oben"
			if event.key == K_DOWN:
				richtung = "unten" 
				
	if richtung == "links":
		x = x - 1
	if richtung == "rechts":
		x = x + 1
	if richtung == "oben":
		y = y - 1
	if richtung == "unten":
		y = y + 1
			
	DISPLAY.fill(SCHWARZ)
	DISPLAY.blit(sponge, (xBild, yBild)) #Bild anzeigen mit Koordinaten
	
	pygame.draw.circle(DISPLAY, PINK, (x, y), 20, 10)
	#AUFGABE: wie kann ich feststellen ob der Kreis das Bild "berührt"?
	#HINWEIS: Koordinaten als Variable und mit if vergleichen
	
	if x > xBild and x < xBild + 250:
		if y > yBild and y < yBild + 250:
			print("getroffen")
	
	pygame.display.update()
