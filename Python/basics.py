import pygame
import time
#first program
print("Hello World")

# Questions:
#what is modules? and its 2 types?
#what is PIP?
# how to excute code in cmd?
# what are comments? and its 2 types?
# what is REPL in python? 
# Using REPL, write 5 tables?
# install any of the module and use them


pygame.mixer.init()
pygame.mixer.music.load("Humnava_mere.mp3")
pygame.mixer.music.play()

while pygame.mixer.music.get_busy():
    time.sleep(0.5)