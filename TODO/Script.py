# Script.py

# Este script muestra ejemplos de diferentes tipos de strings en Python

# Tipos de Strings con ejemplos
print("\nTipos de Strings con ejemplos:")
print("String simple: 'Hola Mundo'")
print("String con comillas dobles: \"Hola Mundo\"")
print("String multilínea con comillas simples:")
print('''Hola   
Mundo''')
print("String multilínea con comillas dobles:")
print("""Hola
Mundo""")
print("String crudo: r'Hola Mundo'")
print("String crudo con comillas dobles: r\"Hola Mundo\"")
print("String bytes: b'Hola Mundo'")
print("String bytes con comillas dobles: b\"Hola Mundo\"")
print("String formateado: f'Hola {\"Mundo\"}'")
print("String formateado con comillas dobles: f\"Hola {'Mundo'}\"")
print("String Unicode: u'Hola Mundo'")
print("String Unicode con comillas dobles: u\"Hola Mundo\"")
print("String Unicode con comillas simples: U'Hola Mundo'")
print("String Unicode con comillas dobles: U\"Hola Mundo\"")

# tipos de numeros
print("\nTipos de Números con ejemplos:")
print("Entero: 42")
print("Flotante: 3.14")
print("Complejo: 1 + 2j")

# Tipos de Números Complejos
print("\nTipos de Números Complejos con ejemplos:")
print("Número complejo: 1 + 2j")
print("Número complejo con parte real: complex(1, 2)")

# Tipos de Booleanos
print("\nTipos de Booleanos con ejemplos:")
print("Booleano Verdadero: True")
print("Booleano Falso: False")

# Tipos de Listas
print("\nTipos de Listas con ejemplos:")
print("Lista de enteros: [1, 2, 3]")
print("Lista de cadenas: ['a', 'b', 'c']")

# Tipos de Tuplas
print("\nTipos de Tuplas con ejemplos:")
print("Tupla de enteros: (1, 2, 3)")
print("Tupla de cadenas: ('a', 'b', 'c')")

# Tipos de Diccionarios
print("\nTipos de Diccionarios con ejemplos:")
print("Diccionario de enteros: {'a': 1, 'b': 2, 'c': 3}")
print("Diccionario de cadenas: {'a': 'apple', 'b': 'banana', 'c': 'cherry'}")

# Tipos de Conjuntos
print("\nTipos de Conjuntos con ejemplos:")
print("Conjunto de enteros: {1, 2, 3}")
print("Conjunto de cadenas: {'a', 'b', 'c'}")

# Tipos de Conjuntos Inmutables
print("\nTipos de Conjuntos Inmutables con ejemplos:")
print("Conjunto inmutable de enteros: frozenset([1, 2, 3])")
print("Conjunto inmutable de cadenas: frozenset(['a', 'b', 'c'])")

# Tipos de Bytes
print("\nTipos de Bytes con ejemplos:")
print("Bytes: b'Hola Mundo'")
print("Bytes con comillas dobles: b\"Hola Mundo\"")

# Tipos de Bytes Inmutables
print("\nTipos de Bytes Inmutables con ejemplos:")
print("Bytes inmutables: bytes('Hola Mundo', 'utf-8')")
print("Bytes inmutables con comillas dobles: bytes(\"Hola Mundo\", 'utf-8')")

# Tipos de None
print("\nTipos de None con ejemplos:")
print("None: None")
print("None con comillas simples: 'None'")
print("None con comillas dobles: \"None\"")

# Tipos de Funciones
print("\nTipos de Funciones con ejemplos:")
def ejemplo_funcion():
    return "Esta es una función de ejemplo"

# Llamada a la función de ejemplo
print("Llamada a la función de ejemplo:", ejemplo_funcion())

# Tipos de Módulos
print("\nTipos de Módulos con ejemplos:")
import math
print("Módulo importado: math")
print("Función del módulo math: math.sqrt(16) =", math.sqrt(16))

# Tipos de Clases
print("\nTipos de Clases con ejemplos:")
class EjemploClase:
    def __init__(self, valor):
        self.valor = valor

    def mostrar_valor(self):
        return f"El valor es: {self.valor}"
    
# Creación de una instancia de la clase EjemploClase
ejemplo = EjemploClase(10)
print("Instancia de la clase EjemploClase:", ejemplo.mostrar_valor())

# Tipos de Excepciones
print("\nTipos de Excepciones con ejemplos:")
try:
    1 / 0
except ZeroDivisionError as e:
    print("Excepción capturada:", e)

# Tipos de Generadores
print("\nTipos de Generadores con ejemplos:")
def generador_ejemplo():
    yield "Primer valor"
    yield "Segundo valor"

# Creación de un generador
generador = generador_ejemplo()
print("Valores del generador:")
for valor in generador:
    print(valor)

# Tipos de Iteradores
print("\nTipos de Iteradores con ejemplos:")
class IteradorEjemplo:
    def __init__(self, datos):
        self.datos = datos
        self.indice = 0

    def __iter__(self):
        return self

    def __next__(self):
        if self.indice < len(self.datos):
            valor = self.datos[self.indice]
            self.indice += 1
            return valor
        else:
            raise StopIteration
        
# Creación de un iterador
iterador = IteradorEjemplo([1, 2, 3])
print("Valores del iterador:")
for valor in iterador:
    print(valor)   

# Tipos de Context Managers
print("\nTipos de Context Managers con ejemplos:")
from contextlib import contextmanager
@contextmanager
def ejemplo_context_manager():
    print("Entrando en el contexto")
    yield
    print("Saliendo del contexto")

# Uso del context manager
with ejemplo_context_manager():
    print("Dentro del contexto")

# upper, lower, swapcase, title, capitalize, strip, replace, split, join, find, count, format, isdigit, isalpha, isalnum, startswith, endswith
print("\nMétodos de Strings con ejemplos:")
texto = "   Hola Mundo   "
print("Texto original:", texto)
print("Texto en mayúsculas:", texto.upper())
print("Texto en minúsculas:", texto.lower())
print("Texto con mayúsculas y minúsculas intercambiadas:", texto.swapcase())
print("Texto en formato título:", texto.title())
print("Texto capitalizado:", texto.capitalize())
print("Texto sin espacios al inicio y al final:", texto.strip())
print("Texto reemplazado:", texto.replace("Mundo", "Python"))
print("Texto dividido en palabras:", texto.split())
print("Texto unido con guiones:", "-".join(texto.split()))
print("Posición de 'Mundo' en el texto:", texto.find("Mundo"))
print("Cantidad de veces que 'o' aparece en el texto:", texto.count("o"))
print("Texto formateado:", "Hola {}".format("Mundo"))
print("¿El texto contiene dígitos?", texto.isdigit())
print("¿El texto contiene solo letras?", texto.isalpha())
print("¿El texto contiene letras y números?", texto.isalnum())
print("¿El texto comienza con '   '?", texto.startswith("   "))
print("¿El texto termina con '   '?", texto.endswith("   "))

# Tipos de Funciones Lambda
print("\nTipos de Funciones Lambda con ejemplos:")
suma = lambda x, y: x + y
print("Suma de 5 y 3 usando lambda:", suma(5, 3))

# bucles for, while
print("\nBucles con ejemplos:")
# Bucle for
print("Bucle for:")
for i in range(5):
    print("Iteración", i)
# Bucle while
print("Bucle while:")
contador = 0
while contador < 5:
    print("Contador:", contador)
    contador += 1
# Condicionales if, elif, else
print("\nCondicionales con ejemplos:")
# Condicional if
x = 10
if x > 5:
    print("x es mayor que 5")
# Condicional elif
elif x == 5:
    print("x es igual a 5")
# Condicional else
else:
    print("x es menor que 5")
# Excepciones try, except, finally
print("\nExcepciones con ejemplos:")
try:
    print("Intentando dividir por cero...")
    resultado = 10 / 0
except ZeroDivisionError as e:
    print("Excepción capturada:", e)
finally:
    print("Bloque finally ejecutado, limpieza de recursos si es necesario.")
# Importación de módulos
print("\nImportación de módulos con ejemplos:")
import os
print("Directorio actual:", os.getcwd())
# Importación de funciones específicas
from math import sqrt
print("Raíz cuadrada de 16:", sqrt(16))