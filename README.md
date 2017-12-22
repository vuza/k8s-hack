# Why the hell should I use Kubernetes?

This repository explains some common use cases of k8s and easy hands-on tutorials.

## Prerequisites

- Minikube: A fake, local k8s cluster
- Docker: Docker to build your applications
- kubectl: The official k8s cli

## Notes
- enable ingress `minikube addons enable ingress`
- call service `http --verify=no --follow GET minikube/awesome-app/ping`
- Deploy ressources using `kubectl apply -f <ressource>`