# raw makefile
# - ease repeatitive operations

all:

PKGNAME="neoip-utils"
VERSION="0.6.0"
# work: get that dynamically
SRC_DIR=$(shell /bin/pwd)
DST_DIR_LIB=$(DESTDIR)/usr/share/neoip-utils
DST_DIR_BIN=$(DESTDIR)/usr/bin

build:
	echo "make build"

clean:
	echo "make clean"

install: build
	echo "make install"
	install -d $(DST_DIR_LIB)
	rsync -va --exclude debian --exclude .git $(SRC_DIR)/. $(DST_DIR_LIB)
	install -d $(DST_DIR_BIN)
	cp $(DST_DIR_LIB)/bin/neoip-url $(DST_DIR_BIN)

uninstall:
	rm -rf $(DST_DIR_LIB)
	rm -f $(DST_DIR_BIN)/neoip-url

#################################################################################
#		deb package handling						#
#################################################################################

deb_src_build:
	debuild -S -k'jerome etienne' -I.git

deb_bin_build:
	 

deb_upd_changelog:
	dch --newversion $(VERSION)~lucid1~ppa`date +%Y%m%d%H%M` --maintmaint --force-bad-version --distribution `lsb_release -c -s` Another build

deb_clean:
	rm -f ../$(PKGNAME)_$(VERSION)~lucid1~ppa*

ppa_upload: deb_clean deb_upd_changelog deb_src_build
	dput -U ppa:jerome-etienne/neoip ../$(PKGNAME)_$(VERSION)~lucid1~ppa*_source.changes 
