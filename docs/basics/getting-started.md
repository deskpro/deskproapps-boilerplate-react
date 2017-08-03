# Getting started

Three items are required in order to get started developing applications:

1. Access to the latest version of [DeskPRO](https://www.deskpro.com/). The minimum version is XXX-YYY. You can use an existing installation if it was updated
or you can go to the [downloads]((https://support.deskpro.com/en/downloads)) page and pick your distribution.
2. A clone of this repository
3. The [Deskpro Apps Tool](https://github.com/deskpro/deskproapps-dpat) present on your machine. This is the official build tool for DeskPRO Apps and you will need it at least for packaging your application in the format required for installation.

The following chapters assume you have already solved the first requirement and you have access to the latest version of DeskPRO (version XXX-YYY at the time of writing)     
and you have successfully cloned this repository. Any commands, unless specified, will assume your working directory is the folder where you cloned this repository

### Developing applications with a user interface

If your application offers a user interface, then the first thing to do is install the required dependencies:

    npm install && npm install --save @deskproapps/deskproapps-sdk-react && npm install -g @deskproapps/dpat  

We recommend to have [Deskpro Apps Tool](https://github.com/deskpro/deskproapps-dpat) globally available, but if for some reason you can not, then install all the dependencies locally with this command:

    npm install && npm install --save @deskproapps/deskproapps-sdk-react && npm install @deskproapps/dpat

### Developing background applications

Background applications are applications which do not require a user interface, beyond showing the occasional warning messages or pop-ups. If you want to develop such an application, you should install the dependencies with this command:

    npm install && npm install --save @deskproapps/deskproapps-sdk-core && npm install -g @deskproapps/dpat  

We recommend to have [Deskpro Apps Tool](https://github.com/deskpro/deskproapps-dpat) globally available, but if for some reason you can not, then install all the dependencies locally with this command:

    npm install && npm install --save @deskproapps/deskproapps-sdk-core && npm install @deskproapps/dpat

## Examples

## Testing