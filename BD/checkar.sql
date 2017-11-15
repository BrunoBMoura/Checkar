CREATE TABLE CheckPos
(
  placa VARCHAR(7) NOT NULL,
  modelo VARCHAR(30),
  marca VARCHAR(30),
  bairro VARCHAR(50),
  cidade VARCHAR(50),
  estado VARCHAR(50),
  lat double NOT NULL,
  longi double NOT NULL,
  data DATE NOT NULL,
  PRIMARY KEY (placa)
 );

CREATE TABLE Orcamento
(
  id INT unsigned NOT NULL AUTO_INCREMENT,
  placa VARCHAR(6) NOT NULL,
  precoCheio double,
  precoFinal double,
  data DATE,
  PRIMARY KEY (id),
  FOREIGN KEY (placa) REFERENCES CheckPos(placa)
);